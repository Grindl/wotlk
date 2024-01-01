package shaman

import (
	"time"

	"github.com/wowsims/sod/sim/core"
)

// TODO SHAMAN-ENH AOE
func (shaman *Shaman) registerFireNovaSpell() {
	impFireNovaCDReduction := shaman.Talents.ImprovedFireTotems * 2
	fireNovaCooldown := 10 - impFireNovaCDReduction

	shaman.FireNova = shaman.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 61657},
		SpellSchool: core.SpellSchoolFire,
		ProcMask:    core.ProcMaskSpellDamage,
		Flags:       SpellFlagFocusable | core.SpellFlagAPL,

		ManaCost: core.ManaCostOptions{
			BaseCost: 0.22,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
			CD: core.Cooldown{
				Timer:    shaman.NewTimer(),
				Duration: time.Second * time.Duration(fireNovaCooldown),
			},
		},

		BonusHitRating:   float64(shaman.Talents.NaturesGuidance) * core.SpellHitRatingPerHitChance,
		DamageMultiplier: 1 + float64(shaman.Talents.CallOfFlame)*0.05 + float64(shaman.Talents.ImprovedFireTotems)*0.1,
		CritMultiplier:   shaman.ElementalCritMultiplier(0),
		ThreatMultiplier: shaman.spellThreatMultiplier(),

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			// FIXME: double check spell coefficients
			dmgFromSP := 0.2142 * spell.SpellPower()
			for _, aoeTarget := range sim.Encounter.TargetUnits {
				baseDamage := sim.Roll(893, 997) + dmgFromSP
				// TODO: Uncomment this
				//baseDamage *= sim.Encounter.AOECapMultiplier()
				spell.CalcAndDealDamage(sim, aoeTarget, baseDamage, spell.OutcomeMagicHitAndCrit)
			}
		},
	})
}

func (shaman *Shaman) IsFireNovaCastable(sim *core.Simulation) bool {
	return shaman.FireNova.IsReady(sim) && shaman.Totems.Fire > 0
}

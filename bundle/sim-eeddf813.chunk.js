import{fB as e,T as t,fC as a,fD as n,fE as l,fF as s,fG as o,S as i,e7 as r,L as d,r as c,t as p,fH as m,E as h,co as g,cr as u,ct as S,a2 as f,ab as I,F as v,aG as y,br as O,w as b,B as T,aH as P,g as R,u as A,aU as D,bF as k}from"./detailed_results-88439820.chunk.js";import{a as B,b as G,e as H,q as C,f as w,r as E,t as F,T as j,a4 as L,$ as M,a0 as N,a1 as U,a2 as x,a3 as W,y as z,I as V}from"./preset_utils-a31de15d.chunk.js";const q=B({fieldName:"startingRunicPower",label:"Starting Runic Power",labelTooltip:"Initial RP at the start of each iteration."});B({fieldName:"defensiveDelay",label:"Defensives Delay",labelTooltip:"Minimum delay between using more defensive cooldowns."});const K={inputs:[G({fieldName:"presence",label:"Presence",labelTooltip:"Presence to be in during the encounter.",values:[{name:"Blood",value:e.Blood},{name:"Frost",value:e.Frost},{name:"Unholy",value:e.Unholy}],changeEmitter:e=>t.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),G({fieldName:"opener",label:"Opener",labelTooltip:"Chose what opener to perform:<br>\t\t\t\t<b>Regular</b>: Regular opener.<br>\t\t\t\t<b>Threat</b>: Full IT spam for max threat.",values:[{name:"Regular",value:a.Regular},{name:"Threat",value:a.Threat}],changeEmitter:e=>t.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),G({fieldName:"optimizationSetting",label:"Optimization Setting",labelTooltip:"Chose what metric to optimize:<br>\t\t\t\t<b>Hps</b>: Prioritizes holding runes for healing after damage taken.<br>\t\t\t\t<b>Tps</b>: Prioritizes spending runes for icy touch spam.",values:[{name:"Hps",value:n.Hps},{name:"Tps",value:n.Tps}],changeEmitter:e=>t.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),G({fieldName:"bloodSpell",label:"Blood Spell",labelTooltip:"Chose what blood rune spender to use.",values:[{name:"Blood Strike",value:l.BloodStrike},{name:"Blood Boil",value:l.BloodBoil},{name:"Heart Strike",value:l.HeartStrike}],changeEmitter:e=>t.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),G({fieldName:"bloodTapPrio",label:"Blood Tap",labelTooltip:"Chose how to use Blood Tap:<br>\t\t\t\t<b>Use as Defensive Cooldown</b>: Use as defined in Cooldowns (Requires T10 4pc).<br>\t\t\t\t<b>Offensive</b>: Use Blood Tap for extra Icy Touches.",values:[{name:"Use as Defensive Cooldown",value:s.Defensive},{name:"Offensive",value:s.Offensive}],changeEmitter:e=>t.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},_={items:[{id:46120,enchant:3878,gems:[41380,36767]},{id:45485,gems:[40008]},{id:46122,enchant:3852,gems:[40008]},{id:45496,enchant:3605,gems:[40022]},{id:46118,gems:[36767,36767]},{id:45111,enchant:3850,gems:[0]},{id:46119,enchant:3860,gems:[40008,0]},{id:45551,gems:[40008,40008,40008]},{id:45594,enchant:3822,gems:[40008,40008,40008]},{id:45988,enchant:3232,gems:[40008,40008]},{id:45471,gems:[40008]},{id:45326},{id:45158},{id:46021},{id:45533,enchant:3370,gems:[40008,40008]},{},{id:45144}]},$={items:[{id:49467,enchant:3878,gems:[41380,40119]},{id:47133,gems:[40119]},{id:47698,enchant:3852,gems:[40119]},{id:47549,enchant:3294,gems:[40119]},{id:46968,enchant:3297,gems:[40119,40119,40119]},{id:47111,enchant:3850,gems:[40119,0]},{id:45487,enchant:3860,gems:[40119,40119,0]},{id:47076,gems:[40130,36767,36767]},{id:47061,enchant:3327,gems:[40119,40119,40119]},{id:47003,enchant:3606,gems:[40119,40119]},{id:49489},{id:47955,gems:[36767]},{id:47088},{id:45158},{id:47515,enchant:3847,gems:[40119,40119]},{},{id:47672}]},J={items:[{id:50640,enchant:3878,gems:[41380,40130]},{id:50682,gems:[40119]},{id:51309,enchant:3852,gems:[40119]},{id:50718,enchant:3294,gems:[40119]},{id:51305,enchant:3297,gems:[40119,40119]},{id:51901,enchant:3757,gems:[40119,0]},{id:51307,enchant:3860,gems:[40119,0]},{id:50691,gems:[40119,40119,40119]},{id:51308,enchant:3327,gems:[40119,40119]},{id:50625,enchant:3606,gems:[40119,40119]},{id:50404,gems:[40119]},{id:50622,gems:[40119]},{id:50344},{id:50364},{id:50735,enchant:3847,gems:[40119,40119,40119]},{},{id:50462}]},Q={items:[{id:40565,enchant:3878,gems:[41380,36767]},{id:40387},{id:40568,enchant:3852,gems:[40008]},{id:40252,enchant:3605},{id:40559,gems:[40008,40022]},{id:40306,enchant:3850,gems:[40008,0]},{id:40563,enchant:3860,gems:[40008,0]},{id:39759,gems:[40008,40008]},{id:40589,enchant:3822},{id:40297,enchant:3232},{id:40718},{id:40107},{id:44063,gems:[36767,36767]},{id:40257},{id:40345,enchant:3370},{id:40345,enchant:3368},{id:40714}]},X={items:[{id:46120,enchant:3878,gems:[41380,36767]},{id:45485,gems:[40008]},{id:46122,enchant:3852,gems:[40008]},{id:45496,enchant:3605,gems:[40022]},{id:46118,gems:[36767,36767]},{id:45111,enchant:3850,gems:[0]},{id:46119,enchant:3860,gems:[40008,0]},{id:45551,gems:[40008,40008,40008]},{id:45594,enchant:3822,gems:[40008,40008,40008]},{id:45988,enchant:3232,gems:[40008,40008]},{id:45471,gems:[40008]},{id:45326},{id:45158},{id:46021},{id:46097,enchant:3370,gems:[40008]},{id:46097,enchant:3368,gems:[40008]},{id:45144}]},Y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48263}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:48792}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:55233}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"60%"}}}},castSpell:{spellId:{spellId:48982}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"60%"}}}},castSpell:{spellId:{spellId:48707}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"60%"}}}},castSpell:{spellId:{spellId:48743}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"40"}}}},castSpell:{spellId:{spellId:56815}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:59131}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},castSpell:{spellId:{tag:1,spellId:49921}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:55078}}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:50842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentNonDeathRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGt",lhs:{currentNonDeathRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"0"}}}}]}},castSpell:{spellId:{tag:1,spellId:49924}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},castSpell:{spellId:{spellId:59131}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{currentNonDeathRuneCount:{runeType:"RuneBlood"}},rhs:{const:{val:"1"}}}},{spellIsReady:{spellId:{spellId:47568}}}]}},castSpell:{spellId:{tag:1,spellId:49930}}}},{action:{castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:47568}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"80"}}}},castSpell:{spellId:{spellId:49895}}}}]},Z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48263}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},{not:{val:{auraIsActive:{auraId:{spellId:55233}}}}}]}},castSpell:{spellId:{spellId:48792}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},{not:{val:{auraIsActive:{auraId:{spellId:48792}}}}}]}},castSpell:{spellId:{spellId:55233}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"60%"}}}},castSpell:{spellId:{spellId:48707}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"60%"}}}},castSpell:{spellId:{spellId:48743}}}},{action:{condition:{or:{vals:[{not:{val:{spellIsReady:{spellId:{spellId:49028}}}}},{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"80"}}}}]}},castSpell:{spellId:{spellId:56815}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:59131}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},castSpell:{spellId:{tag:1,spellId:49921}}}},{action:{castSpell:{spellId:{spellId:49016}}}},{action:{castSpell:{spellId:{spellId:49028}}}},{action:{castSpell:{spellId:{tag:1,spellId:55262}}}},{action:{castSpell:{spellId:{tag:1,spellId:49924}}}},{action:{castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:47568}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"80"}}}},castSpell:{spellId:{spellId:49895}}}}]},ee=H("P1 Blood",{items:[{id:40565,enchant:3878,gems:[41380,36767]},{id:40387},{id:39704,enchant:3852,gems:[40008]},{id:40252,enchant:3605},{id:40559,gems:[40008,40022]},{id:40306,enchant:3850,gems:[40008,0]},{id:40563,enchant:3860,gems:[40008,0]},{id:39759,gems:[40008,40008]},{id:40567,enchant:3822,gems:[40008,40008]},{id:40297,enchant:3232},{id:40718},{id:40107},{id:44063,gems:[36767,36767]},{id:42341,gems:[40008,40008]},{id:40406,enchant:3847},{},{id:40207}]}),te=H("P2 Blood",_),ae=H("P3 Blood",$),ne=H("P4 Blood",J),le=H("P1 Frost",Q),se=H("P2 Frost",X),oe=o.create({opener:a.Threat,optimizationSetting:n.Hps,bloodSpell:l.BloodStrike,presence:e.Frost}),ie=C("Blood Legacy",i.SpecTankDeathknight,oe),re=w("Blood Icy Touch",Y),de=w("Blood Aggro",Z),ce={name:"Blood",data:r.create({talentsString:"005512153330030320102013-3050505000023-005",glyphs:d.create({major1:c.GlyphOfDisease,major2:c.GlyphOfRuneStrike,major3:c.GlyphOfDarkCommand,minor1:p.GlyphOfHornOfWinter,minor2:p.GlyphOfBloodTap,minor3:p.GlyphOfRaiseDead})})},pe={name:"Blood Aggro",data:r.create({talentsString:"0355220530303303201020131301--0052003050032",glyphs:d.create({major1:c.GlyphOfDancingRuneWeapon,major2:c.GlyphOfRuneStrike,major3:c.GlyphOfDarkCommand,minor1:p.GlyphOfHornOfWinter,minor2:p.GlyphOfBloodTap,minor3:p.GlyphOfRaiseDead})})},me={name:"2B Blood",data:r.create({talentsString:"005512153330030320102013-3050505000023201-002",glyphs:d.create({major1:c.GlyphOfDisease,major2:c.GlyphOfRuneStrike,major3:c.GlyphOfDarkCommand,minor1:p.GlyphOfHornOfWinter,minor2:p.GlyphOfBloodTap,minor3:p.GlyphOfRaiseDead})})},he={name:"Frost",data:r.create({talentsString:"005510003-3050535000223301030023310035-005",glyphs:d.create({major1:c.GlyphOfDisease,major2:c.GlyphOfRuneStrike,major3:c.GlyphOfDarkCommand,minor1:p.GlyphOfHornOfWinter,minor2:p.GlyphOfBloodTap,minor3:p.GlyphOfRaiseDead})})},ge={name:"2B Frost",data:r.create({talentsString:"00551005303003002-305053510022330100002301-005",glyphs:d.create({major1:c.GlyphOfDisease,major2:c.GlyphOfRuneStrike,major3:c.GlyphOfDarkCommand,minor1:p.GlyphOfHornOfWinter,minor2:p.GlyphOfBloodTap,minor3:p.GlyphOfRaiseDead})})},ue=m.create({startingRunicPower:0}),Se=h.create({flask:g.FlaskOfStoneblood,food:u.FoodDragonfinFilet,defaultPotion:S.IndestructiblePotion,prepopPotion:S.IndestructiblePotion}),fe=E(i.SpecTankDeathknight,{cssClass:"tank-deathknight-sim-ui",cssScheme:"death-knight",knownIssues:["<p>Defensive CDs use is very basic and wip.</p>"],epStats:[f.StatStamina,f.StatStrength,f.StatAgility,f.StatAttackPower,f.StatExpertise,f.StatMeleeHit,f.StatMeleeCrit,f.StatMeleeHaste,f.StatSpellHit,f.StatSpellCrit,f.StatSpellHaste,f.StatHealth,f.StatArmor,f.StatBonusArmor,f.StatArmorPenetration,f.StatDefense,f.StatDodge,f.StatParry,f.StatResilience,f.StatSpellHit,f.StatNatureResistance,f.StatShadowResistance,f.StatFrostResistance],epPseudoStats:[I.PseudoStatMainHandDps,I.PseudoStatOffHandDps],epReferenceStat:f.StatAttackPower,displayStats:[f.StatHealth,f.StatArmor,f.StatBonusArmor,f.StatStamina,f.StatStrength,f.StatAgility,f.StatAttackPower,f.StatExpertise,f.StatSpellHit,f.StatSpellCrit,f.StatMeleeHit,f.StatMeleeCrit,f.StatMeleeHaste,f.StatArmorPenetration,f.StatDefense,f.StatDodge,f.StatParry,f.StatResilience,f.StatNatureResistance,f.StatShadowResistance,f.StatFrostResistance],defaults:{gear:te.gear,epWeights:v.fromMap({[f.StatArmor]:.05,[f.StatBonusArmor]:.03,[f.StatStamina]:1,[f.StatStrength]:.33,[f.StatAgility]:.6,[f.StatAttackPower]:.06,[f.StatExpertise]:.67,[f.StatMeleeHit]:.67,[f.StatMeleeCrit]:.28,[f.StatMeleeHaste]:.21,[f.StatArmorPenetration]:.19,[f.StatBlock]:.35,[f.StatBlockValue]:.59,[f.StatDodge]:.7,[f.StatParry]:.58,[f.StatDefense]:.8},{[I.PseudoStatMainHandDps]:3.1,[I.PseudoStatOffHandDps]:0}),consumes:Se,rotation:oe,talents:ce.data,specOptions:ue,raidBuffs:y.create({retributionAura:!0,powerWordFortitude:O.TristateEffectImproved,giftOfTheWild:O.TristateEffectImproved,swiftRetribution:!0,strengthOfEarthTotem:O.TristateEffectImproved,icyTalons:!0,abominationsMight:!0,leaderOfThePack:O.TristateEffectRegular,sanctifiedRetribution:!0,bloodlust:!0,devotionAura:O.TristateEffectImproved,stoneskinTotem:O.TristateEffectImproved}),partyBuffs:b.create({}),individualBuffs:T.create({blessingOfKings:!0,blessingOfMight:O.TristateEffectImproved,blessingOfSanctuary:!0}),debuffs:P.create({bloodFrenzy:!0,faerieFire:O.TristateEffectRegular,sunderArmor:!0,misery:!0,ebonPlaguebringer:!0,mangle:!0,heartOfTheCrusader:!0,demoralizingShout:O.TristateEffectImproved,frostFever:O.TristateEffectImproved,insectSwarm:!0,judgementOfLight:!0})},playerIconInputs:[],rotationInputs:K,includeBuffDebuffInputs:[F],excludeBuffDebuffInputs:[],otherInputs:{inputs:[j,L,M,N,U,x,W,z,q]},encounterPicker:{showExecuteProportion:!1},presets:{rotations:[ie,re,de],talents:[ce,pe,me,he,ge],gear:[ee,le,te,se,ae,ne]},autoRotation:e=>re.rotation.rotation,raidSimPresets:[{spec:i.SpecTankDeathknight,tooltip:"Blood Tank Death Knight",defaultName:"Blood Tank",iconUrl:R(A.ClassDeathknight,0),talents:ce.data,specOptions:ue,consumes:Se,defaultFactionRaces:{[D.Unknown]:k.RaceUnknown,[D.Alliance]:k.RaceHuman,[D.Horde]:k.RaceTroll},defaultGear:{[D.Unknown]:{},[D.Alliance]:{1:ee.gear,2:te.gear,3:ae.gear,4:ne.gear},[D.Horde]:{1:ee.gear,2:te.gear,3:ae.gear,4:ne.gear}}}]});class Ie extends V{constructor(e,t){super(e,t,fe)}}export{Ie as T};
//# sourceMappingURL=sim-eeddf813.chunk.js.map

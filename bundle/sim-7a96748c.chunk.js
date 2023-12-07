import{eW as e,S as a,e7 as t,L as s,D as l,b as n,eX as i,ap as o,E as r,cp as d,cq as p,cr as c,ct as m,cn as h,cs as g,a2 as u,ab as I,F as S,aG as f,br as R,w as T,B as v,aH as y,e0 as O,K as b,e2 as w,b5 as A,g as P,u as E,aU as k,bF as D}from"./detailed_results-88439820.chunk.js";import{a as L,d as x,c as F,e as M,f as H,U as C,r as G,X as B,Y as N,Z as U,_ as J,t as j,T as _,$ as z,a0 as W,a1 as $,a2 as q,a3 as K,a4 as X,y as Q,I as V}from"./preset_utils-a31de15d.chunk.js";import{T as Y}from"./suggest_gems_action-281dc90e.chunk.js";import{s as Z}from"./apl_utils-79302598.chunk.js";const ee=L({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),ae={inputs:[x({fieldName:"maulRageThreshold",label:"Maul Rage Threshold",labelTooltip:"Queue Maul when Rage is above this value."}),x({fieldName:"lacerateTime",label:"Lacerate Refresh Leeway",labelTooltip:"Refresh Lacerate when remaining duration is less than this value (in seconds)."}),F({fieldName:"maintainDemoralizingRoar",label:"Maintain Demo Roar",labelTooltip:"Keep Demoralizing Roar active on the primary target. If a stronger debuff is active, will not cast."})]},te={items:[{id:41678,enchant:67839,gems:[41339,45880]},{id:45517,gems:[40008]},{id:45245,enchant:44957,gems:[40008,40008]},{id:45496,enchant:3294,gems:[42702]},{id:45473,enchant:3832,gems:[40008,40008,40008]},{id:45611,enchant:3850,gems:[40008,0]},{id:46043,enchant:63770,gems:[40008,40008,0]},{id:46095,gems:[40008,40008,40008]},{id:45536,enchant:38373,gems:[40008,40008,40008]},{id:45232,enchant:55016,gems:[40008]},{id:45471,gems:[40091]},{id:45608,gems:[40008]},{id:45158},{id:46021},{id:45533,enchant:3870,gems:[40008,40008]},{},{id:45509}]},se={items:[{id:48204,enchant:3878,gems:[41339,40169]},{id:47133,gems:[49110]},{id:48207,enchant:3852,gems:[40119]},{id:47545,enchant:3294,gems:[40119]},{id:47004,enchant:3832,gems:[40119,40119,40119]},{id:45611,enchant:3850,gems:[40119,0]},{id:48203,enchant:3860,gems:[40119,0]},{id:47112,gems:[40119,40119,40119]},{id:46975,enchant:3822,gems:[40119,40119,40119]},{id:47077,enchant:3606,gems:[40119,40119]},{id:47955,gems:[40119]},{id:47075,gems:[40119]},{id:47088},{id:47131},{id:47130,enchant:3870,gems:[40119,40119]},{},{id:45509}]},le={items:[{id:51296,enchant:3878,gems:[41380,40119]},{id:50682,gems:[40130]},{id:51299,enchant:3852,gems:[40119]},{id:50466,enchant:3294,gems:[40119]},{id:50656,enchant:3330,gems:[40119,40119,40119]},{id:50670,enchant:3850,gems:[40119,0]},{id:51295,enchant:3860,gems:[40119,0]},{id:50707,gems:[40119,40119,40119]},{id:51297,enchant:3822,gems:[40119,40119]},{id:50607,enchant:3606,gems:[40119,40119]},{id:50622,gems:[40119]},{id:50404,gems:[40119]},{id:47088},{id:50364},{id:51432,enchant:3870,gems:[40119,40119]},{},{id:50456}]},ne={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{schedule:{schedule:"0s",innerAction:{castSpell:{spellId:{itemId:42641}}}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:48568}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48568}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:48568}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:48560},maxOverlap:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:48560}}}},{action:{castSpell:{spellId:{spellId:48564}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:48564}}}}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:48564}}},rhs:{const:{val:"1.0s"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:48564}}}}}},{action:{castSpell:{spellId:{spellId:16857}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:48564}}}}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:48564}}},rhs:{const:{val:"1.5s"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:48564}}}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:48568}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48568}}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:48568}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},castSpell:{spellId:{spellId:48562}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"25"}}}},castSpell:{spellId:{spellId:48480,tag:1}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:16857}}}}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:16857}}},rhs:{const:{val:"1.5s"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:16857}}}}}}]},ie=M("P1",{items:[{id:40329,enchant:67839,gems:[41339,40008]},{id:40387},{id:40494,enchant:44957,gems:[40008]},{id:40252,enchant:3294},{id:40471,enchant:3832,gems:[42702,40088]},{id:40186,enchant:3850,gems:[40008,0]},{id:40472,enchant:63770,gems:[40008,0]},{id:43591,gems:[40008,40008,40008]},{id:44011,enchant:38373,gems:[40008,40008]},{id:40243,enchant:55016,gems:[40008]},{id:40370},{id:37784},{id:44253},{id:37220},{id:40280,enchant:2673},{},{id:38365}]}),oe=M("P2",te),re=M("P3",se),de=M("P4",le),pe=e.create({maulRageThreshold:25,maintainDemoralizingRoar:!0,lacerateTime:8}),ce=H("APL Default",ne),me=C("Simple Default",a.SpecFeralTankDruid,pe),he={name:"Standard",data:t.create({talentsString:"-503232132322010353120300313511-20350001",glyphs:s.create({major1:l.GlyphOfMaul,major2:l.GlyphOfSurvivalInstincts,major3:l.GlyphOfFrenziedRegeneration,minor1:n.GlyphOfChallengingRoar,minor2:n.GlyphOfThorns,minor3:n.GlyphOfUnburdenedRebirth})})},ge=i.create({innervateTarget:o.create(),startingRage:20}),ue=r.create({battleElixir:d.GurusElixir,guardianElixir:p.GiftOfArthas,food:c.FoodBlackenedDragonfin,prepopPotion:m.IndestructiblePotion,defaultPotion:m.IndestructiblePotion,defaultConjured:h.ConjuredHealthstone,thermalSapper:!0,fillerExplosive:g.ExplosiveSaroniteBomb}),Ie=G(a.SpecFeralTankDruid,{cssClass:"feral-tank-druid-sim-ui",cssScheme:"druid",knownIssues:[],epStats:[u.StatStamina,u.StatStrength,u.StatAgility,u.StatAttackPower,u.StatExpertise,u.StatMeleeHit,u.StatMeleeCrit,u.StatMeleeHaste,u.StatArmor,u.StatBonusArmor,u.StatArmorPenetration,u.StatDefense,u.StatDodge,u.StatNatureResistance,u.StatShadowResistance,u.StatFrostResistance],epPseudoStats:[I.PseudoStatMainHandDps],epReferenceStat:u.StatAttackPower,displayStats:[u.StatHealth,u.StatArmor,u.StatBonusArmor,u.StatStamina,u.StatStrength,u.StatAgility,u.StatAttackPower,u.StatExpertise,u.StatMeleeHit,u.StatMeleeCrit,u.StatMeleeHaste,u.StatArmorPenetration,u.StatDefense,u.StatDodge,u.StatSpellHit,u.StatSpellCrit,u.StatNatureResistance,u.StatShadowResistance,u.StatFrostResistance],defaults:{gear:ie.gear,epWeights:S.fromMap({[u.StatArmor]:3.5665,[u.StatBonusArmor]:.5187,[u.StatStamina]:7.3021,[u.StatStrength]:2.3786,[u.StatAgility]:4.4974,[u.StatAttackPower]:1,[u.StatExpertise]:2.6597,[u.StatMeleeHit]:2.9282,[u.StatMeleeCrit]:1.5143,[u.StatMeleeHaste]:2.0983,[u.StatArmorPenetration]:1.584,[u.StatDefense]:1.8171,[u.StatDodge]:2.0196,[u.StatHealth]:.4465},{[I.PseudoStatMainHandDps]:0}),consumes:ue,rotation:pe,talents:he.data,specOptions:ge,raidBuffs:f.create({powerWordFortitude:R.TristateEffectImproved,shadowProtection:!0,giftOfTheWild:R.TristateEffectImproved,thorns:R.TristateEffectImproved,bloodlust:!0,strengthOfEarthTotem:R.TristateEffectImproved,battleShout:R.TristateEffectImproved,unleashedRage:!0,windfuryTotem:R.TristateEffectImproved,arcaneEmpowerment:!0,moonkinAura:R.TristateEffectImproved}),partyBuffs:T.create({heroicPresence:!0}),individualBuffs:v.create({blessingOfKings:!0,blessingOfMight:R.TristateEffectImproved,renewedHope:!0}),debuffs:y.create({savageCombat:!0,faerieFire:R.TristateEffectImproved,exposeArmor:!0,frostFever:R.TristateEffectImproved,masterPoisoner:!0,ebonPlaguebringer:!0,shadowMastery:!0})},playerIconInputs:[],rotationInputs:ae,includeBuffDebuffInputs:[B,N,U,J,j],excludeBuffDebuffInputs:[],otherInputs:{inputs:[_,z,W,$,q,K,X,ee,Q]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[he],rotations:[me,ce],gear:[ie,oe,re,de]},autoRotation:e=>me.rotation.rotation,simpleRotation:(e,a,t)=>{let[s,l]=Z(t);const n=O.fromJsonString('{"condition":{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":48568}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"spellId":{"spellId":48568}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"castSpell":{"spellId":{"spellId":48568}}}'),i=O.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":48560},"maxOverlap":{"const":{"val":"1.5s"}}}},"castSpell":{"spellId":{"spellId":48560}}}'),o=O.fromJsonString('{"castSpell":{"spellId":{"spellId":48564}}}'),r=O.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48564}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":48564}}},"rhs":{"const":{"val":"1.0s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":48564}}}}}'),d=O.fromJsonString('{"castSpell":{"spellId":{"spellId":16857}}}'),p=O.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48564}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":48564}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":48564}}}}}'),c=O.fromJsonString(`{"condition":{"or":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":48568}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"spellId":{"spellId":48568}}},"rhs":{"const":{"val":"${a.lacerateTime.toFixed(1)}s"}}}}]}},"castSpell":{"spellId":{"spellId":48568}}}`),m=O.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"${(a.maulRageThreshold+15).toFixed(0)}"}}}},"castSpell":{"spellId":{"spellId":48562}}}`),h=O.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"${a.maulRageThreshold.toFixed(0)}"}}}},"castSpell":{"spellId":{"spellId":48480,"tag":1}}}`),g=O.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":16857}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":16857}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":16857}}}}}');return l.push(...[n,a.maintainDemoralizingRoar?i:null,o,r,d,p,c,m,h,g].filter((e=>e))),b.create({prepullActions:s,priorityList:l.map((e=>w.create({action:e})))})},raidSimPresets:[{spec:a.SpecFeralTankDruid,tooltip:A[a.SpecFeralTankDruid],defaultName:"Bear",iconUrl:P(E.ClassDruid,1),talents:he.data,specOptions:ge,consumes:ue,defaultFactionRaces:{[k.Unknown]:D.RaceUnknown,[k.Alliance]:D.RaceNightElf,[k.Horde]:D.RaceTauren},defaultGear:{[k.Unknown]:{},[k.Alliance]:{1:ie.gear,2:oe.gear,3:re.gear,4:de.gear},[k.Horde]:{1:ie.gear,2:oe.gear,3:re.gear,4:de.gear}}}]});class Se extends V{constructor(e,a){super(e,a,Ie),new Y(this)}}export{Se as F};
//# sourceMappingURL=sim-7a96748c.chunk.js.map

import{A as e,aq as t,ap as a,eY as s,eZ as n,T as i,e_ as l,cg as d,ch as c,e7 as r,L as o,j as m,k as p,e$ as g,E as h,co as u,cr as f,ct as S,aG as I,br as P,B as y,aH as O,a2 as w,F as T,w as v,S as H,g as C,u as M,aU as R,bF as b}from"./detailed_results-88439820.chunk.js";import{m as F,a as G,b as k,o as D,e as L,f as W,r as E,I as U}from"./preset_utils-a31de15d.chunk.js";const x=F({fieldName:"powerInfusionTarget",id:e.fromSpellId(10060),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().powerInfusionTarget?.type==t.Player,setValue:(e,s,n)=>{const i=s.getSpecOptions();i.powerInfusionTarget=a.create({type:n?t.Player:t.Unknown,index:0}),s.setSpecOptions(e,i)}}),A=F({fieldName:"useInnerFire",id:e.fromSpellId(48168)}),j=F({fieldName:"useShadowfiend",id:e.fromSpellId(34433)}),N=G({fieldName:"rapturesPerMinute",label:"Raptures / Min",labelTooltip:"Number of times to proc Rapture each minute (due to a PWS being fully absorbed).",showWhen:e=>e.getTalents().rapture>0,changeEmitter:e=>i.onAny([e.specOptionsChangeEmitter,e.talentsChangeEmitter])}),B={inputs:[k({fieldName:"type",label:"Type",values:[{name:"Cycle",value:s.Cycle},{name:"Custom",value:s.Custom}]}),D({fieldName:"customRotation",numColumns:2,showCastsPerMinute:!0,values:[{actionId:e.fromSpellId(48063),value:n.GreaterHeal},{actionId:e.fromSpellId(48071),value:n.FlashHeal},{actionId:e.fromSpellId(48068),value:n.Renew},{actionId:e.fromSpellId(48066),value:n.PowerWordShield},{actionId:e.fromSpellId(48089),value:n.CircleOfHealing},{actionId:e.fromSpellId(48072),value:n.PrayerOfHealing},{actionId:e.fromSpellId(48113),value:n.PrayerOfMending},{actionId:e.fromSpellId(53007),value:n.Penance},{actionId:e.fromSpellId(48120),value:n.BindingHeal}],showWhen:e=>e.getRotation().type==s.Custom})]},_={items:[{id:42553,enchant:3819,gems:[41401,42148]},{id:40681},{id:37655,enchant:3809},{id:37291,enchant:3831},{id:39515,enchant:3832,gems:[40012,40012]},{id:37361,enchant:1119,gems:[0]},{id:39519,enchant:3604,gems:[40012,0]},{id:40697,enchant:3601,gems:[42148,42148]},{id:37189,enchant:3719,gems:[40047,49110]},{id:44202,enchant:3606,gems:[40092]},{id:44283},{id:37694},{id:37111},{id:42413,gems:[40012,40012]},{id:37360,enchant:3854},{},{id:37619}]},V={items:[{id:40456,enchant:3819,gems:[41401,39998]},{id:44657,gems:[40047]},{id:40450,enchant:3809,gems:[42144]},{id:40724,enchant:3859},{id:40194,enchant:3832,gems:[42144]},{id:40741,enchant:2332,gems:[0]},{id:40445,enchant:3246,gems:[42144,0]},{id:40271,enchant:3601,gems:[40027,39998]},{id:40398,enchant:3719,gems:[39998,39998]},{id:40236,enchant:3606},{id:40108},{id:40433},{id:37835},{id:40258},{id:40395,enchant:3834},{id:40350},{id:40245}]},q={items:[{id:40447,enchant:3819,gems:[41401,40051]},{id:44657,gems:[40012]},{id:40450,enchant:3809,gems:[40012]},{id:40723,enchant:3831},{id:40381,enchant:3832,gems:[40012,49110]},{id:40741,enchant:1119,gems:[0]},{id:40454,enchant:3604,gems:[40051,0]},{id:40271,enchant:3601,gems:[40012,40012]},{id:40398,enchant:3719,gems:[42148,42148]},{id:40326,enchant:3606,gems:[42148]},{id:40719},{id:40375},{id:37111},{id:42413,gems:[40012,40012]},{id:40395,enchant:3834},{id:40350},{id:40245}]},K={items:[{id:46197,enchant:3819,gems:[41401,45883]},{id:45933,gems:[39998]},{id:45390,enchant:3809,gems:[39998]},{id:45486,enchant:3859,gems:[39998]},{id:46193,enchant:3832,gems:[39998,39998]},{id:45146,enchant:3758,gems:[0]},{id:45520,enchant:3246,gems:[39998,39998,0]},{id:45558,gems:[39998,40047,39998]},{id:45388,enchant:3721,gems:[39998,39998]},{id:46050,enchant:3606,gems:[39998,39998]},{id:45946,gems:[39998]},{id:46096,gems:[39998]},{id:40432},{id:45535},{id:45612,enchant:3834,gems:[40027]},{id:45314},{id:45294,gems:[39998]}]},Y={items:[{id:46197,enchant:3819,gems:[41401,45883]},{id:45447,gems:[40017]},{id:45390,enchant:3809,gems:[40051]},{id:45486,enchant:3859,gems:[40017]},{id:46193,enchant:3832,gems:[40051,40017]},{id:44008,enchant:3758,gems:[40051,0]},{id:45520,enchant:3246,gems:[40017,40017,0]},{id:45558,gems:[40051,40017,40017]},{id:45388,enchant:3721,gems:[40026,40017]},{id:46050,enchant:3606,gems:[40026,40017]},{id:45946,gems:[40017]},{id:46323,gems:[40017]},{id:46051},{id:45535},{id:46035,enchant:3834,gems:[40017]},{id:45271},{id:45511}]},Z={items:[{id:46197,enchant:3820,gems:[41401,40113]},{id:47930,gems:[40113]},{id:46190,enchant:3810,gems:[40113]},{id:47490,enchant:3859,gems:[40134]},{id:46193,enchant:3832,gems:[40113,40113]},{id:47587,enchant:3758,gems:[40113,0]},{id:46188,enchant:3246,gems:[40113,0]},{id:45619,gems:[40113,40113,40113]},{id:47189,enchant:3721,gems:[40113,40113,40113]},{id:46050,enchant:3606,gems:[40113,40113]},{id:46096,gems:[40113]},{id:47224,gems:[40151]},{id:40432},{id:47059},{id:47206,enchant:3834},{id:47146},{id:45294,gems:[40113]}]},$={items:[{id:49482,enchant:3820,gems:[41401,40174]},{id:45443,gems:[40128]},{id:46068,enchant:3810,gems:[40128,40128]},{id:46977,enchant:3831,gems:[40128]},{id:47603,enchant:3832,gems:[40128,40128,40128]},{id:47585,enchant:3758,gems:[40128,0]},{id:47983,enchant:3604,gems:[40128,40128]},{id:45619,gems:[40128,40128,40128]},{id:47985,enchant:3721,gems:[40128,40128]},{id:45135,enchant:3606,gems:[40155,40128]},{id:45946,gems:[40128]},{id:47224,gems:[40128]},{id:45535},{id:47059},{id:47206,enchant:3834},{id:47146},{id:47922}]},z={items:[{id:51178,enchant:3820,gems:[41401,40134]},{id:50700,gems:[40113]},{id:51175,enchant:3810,gems:[40113]},{id:47551,enchant:3859,gems:[40113]},{id:51176,enchant:3832,gems:[40113,40151]},{id:51918,enchant:3758,gems:[40113,0]},{id:51179,enchant:3246,gems:[40113,0]},{id:50702,gems:[40113,40113,40113]},{id:51823,enchant:3721,gems:[40113,40113,40113]},{id:51850,enchant:3606,gems:[40113,40113]},{id:50720,gems:[40113]},{id:50400,gems:[40113]},{id:50366},{id:47059},{id:51944,enchant:3834,gems:[40113]},{id:51922,gems:[40113]},{id:50631,gems:[40113]}]},J={items:[{id:49482,enchant:3820,gems:[41401,40174]},{id:45443,gems:[40128]},{id:46068,enchant:3810,gems:[40128,40128]},{id:46977,enchant:3831,gems:[40128]},{id:47603,enchant:3832,gems:[40128,40128,40128]},{id:47585,enchant:3758,gems:[40128,0]},{id:47983,enchant:3604,gems:[40128,40128]},{id:45619,gems:[40128,40128,40128]},{id:47985,enchant:3721,gems:[40128,40128]},{id:45135,enchant:3606,gems:[40155,40128]},{id:45946,gems:[40128]},{id:47224,gems:[40128]},{id:45535},{id:47059},{id:47206,enchant:3834},{id:47146},{id:47922}]},Q={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48066}}},rhs:{const:{val:"18"}}}},multishield:{spellId:{spellId:48066},maxShields:10,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:53007}}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:53007}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48113}}},rhs:{const:{val:"2"}}}},castSpell:{spellId:{spellId:48113}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48063}}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:48063}}}}]},X={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48063}}},rhs:{const:{val:"10"}}}},castSpell:{spellId:{spellId:48063}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48089}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:48089}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48068}}},rhs:{const:{val:"10"}}}},multidot:{spellId:{spellId:48068},maxDots:10,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellCpm:{spellId:{spellId:48113}}},rhs:{const:{val:"2"}}}},castSpell:{spellId:{spellId:48113}}}}]},ee=L("Disc Preraid Preset",{items:[{id:37294,enchant:3819,gems:[41401,39998]},{id:40681},{id:37691,enchant:3809},{id:37630,enchant:3859},{id:39515,enchant:3832,gems:[42144,42144]},{id:37361,enchant:2332,gems:[0]},{id:39519,enchant:3246,gems:[42144,0]},{id:40697,enchant:3601,gems:[39998,39998]},{id:37622,enchant:3719},{id:44202,enchant:3606,gems:[40027]},{id:44283},{id:37195},{id:37660},{id:42413,gems:[40012,40012]},{id:37360,enchant:3854},{},{id:37238}]},{talentTree:0}),te=L("Holy Preraid Preset",_,{talentTree:1}),ae=L("Disc P1 Preset",V,{talentTree:0}),se=L("Holy P1 Preset",q,{talentTree:1}),ne=L("Disc P2 Preset",K,{talentTree:0}),ie=L("Holy P2 Preset",Y,{talentTree:1}),le=L("Disc P3 Preset",Z,{talentTree:0}),de=L("Holy P3 Preset",$,{talentTree:1}),ce=L("Disc P4 Preset",z,{talentTree:0}),re=L("Holy P4 Preset",J,{talentTree:1}),oe=l.create({type:s.Cycle,customRotation:d.create({spells:[c.create({spell:n.PowerWordShield,castsPerMinute:18}),c.create({spell:n.Penance,castsPerMinute:4}),c.create({spell:n.PrayerOfMending,castsPerMinute:2}),c.create({spell:n.GreaterHeal,castsPerMinute:1})]})});l.create({type:s.Cycle,customRotation:d.create({spells:[c.create({spell:n.GreaterHeal,castsPerMinute:10}),c.create({spell:n.CircleOfHealing,castsPerMinute:5}),c.create({spell:n.Renew,castsPerMinute:10}),c.create({spell:n.PrayerOfMending,castsPerMinute:2})]})});const me=W("Disc",Q),pe=W("Holy",X),ge={name:"Disc",data:r.create({talentsString:"0503203130300512301313231251-2351010303",glyphs:o.create({major1:m.GlyphOfPowerWordShield,major2:m.GlyphOfFlashHeal,major3:m.GlyphOfPenance,minor1:p.GlyphOfFortitude,minor2:p.GlyphOfShadowfiend,minor3:p.GlyphOfFading})})},he={name:"Holy",data:r.create({talentsString:"05032031103-234051032002152530004311051",glyphs:o.create({major1:m.GlyphOfPrayerOfHealing,major2:m.GlyphOfRenew,major3:m.GlyphOfCircleOfHealing,minor1:p.GlyphOfFortitude,minor2:p.GlyphOfShadowfiend,minor3:p.GlyphOfFading})})},ue=g.create({useInnerFire:!0,useShadowfiend:!0,rapturesPerMinute:5,powerInfusionTarget:a.create()}),fe=h.create({flask:u.FlaskOfTheFrostWyrm,food:f.FoodFishFeast,defaultPotion:S.RunicManaInjector,prepopPotion:S.PotionOfWildMagic}),Se=I.create({giftOfTheWild:P.TristateEffectImproved,powerWordFortitude:P.TristateEffectImproved,strengthOfEarthTotem:P.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,trueshotAura:!0,leaderOfThePack:P.TristateEffectImproved,icyTalons:!0,totemOfWrath:!0,moonkinAura:P.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0,demonicPact:500}),Ie=y.create({blessingOfKings:!0,blessingOfWisdom:P.TristateEffectImproved,vampiricTouch:!0}),Pe=O.create({}),ye=E(H.SpecHealingPriest,{cssClass:"healing-priest-sim-ui",cssScheme:"priest",knownIssues:['Talents that apply to, "friendly targets at or below 50% health" are not implemented.',"Prayer of Mending always bounces the maximum number of times."],epStats:[w.StatIntellect,w.StatSpirit,w.StatSpellPower,w.StatSpellCrit,w.StatSpellHaste,w.StatMP5],epReferenceStat:w.StatSpellPower,displayStats:[w.StatHealth,w.StatMana,w.StatStamina,w.StatIntellect,w.StatSpirit,w.StatSpellPower,w.StatSpellCrit,w.StatSpellHaste,w.StatMP5],defaults:{gear:ae.gear,epWeights:T.fromMap({[w.StatIntellect]:2.73,[w.StatSpirit]:1.63,[w.StatSpellPower]:1,[w.StatSpellCrit]:.75,[w.StatSpellHaste]:.28,[w.StatMP5]:2.05}),consumes:fe,rotation:oe,talents:ge.data,specOptions:ue,raidBuffs:Se,partyBuffs:v.create({}),individualBuffs:Ie,debuffs:Pe},playerIconInputs:[x,A,j],rotationInputs:B,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[N]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[ge,he],rotations:[me,pe],gear:[ee,ae,ne,le,ce,te,se,ie,de,re]},autoRotation:e=>0==e.getTalentTree()?me.rotation.rotation:pe.rotation.rotation,raidSimPresets:[{spec:H.SpecHealingPriest,tooltip:"Discipline Priest",defaultName:"Discipline",iconUrl:C(M.ClassPriest,0),talents:ge.data,specOptions:ue,consumes:fe,defaultFactionRaces:{[R.Unknown]:b.RaceUnknown,[R.Alliance]:b.RaceDwarf,[R.Horde]:b.RaceUndead},defaultGear:{[R.Unknown]:{},[R.Alliance]:{1:ae.gear,2:ne.gear,3:le.gear,4:ce.gear},[R.Horde]:{1:ae.gear,2:ne.gear,3:le.gear,4:ce.gear}}},{spec:H.SpecHealingPriest,tooltip:"Holy Priest",defaultName:"Holy",iconUrl:C(M.ClassPriest,1),talents:he.data,specOptions:ue,consumes:fe,defaultFactionRaces:{[R.Unknown]:b.RaceUnknown,[R.Alliance]:b.RaceDwarf,[R.Horde]:b.RaceUndead},defaultGear:{[R.Unknown]:{},[R.Alliance]:{1:se.gear,2:ie.gear,3:de.gear,4:re.gear},[R.Horde]:{1:se.gear,2:ie.gear,3:de.gear,4:re.gear}}}]});class Oe extends U{constructor(e,t){super(e,t,ye)}}export{Oe as H};
//# sourceMappingURL=sim-6b12ac43.chunk.js.map

import{eB as e,A as a,eC as l,au as s,ar as t,aU as i,eD as n,eE as d,eF as p,eG as o,eH as c,eI as r,S as I,e7 as m,L as u,m as h,n as g,eJ as v,$ as S,E as f,ct as A,co as O,cr as T,T as b,a2 as y,F as R,bh as w,bi as L,aG as C,br as G,w as N,B as M,aH as P,b5 as k,g as W,u as F,bF as E}from"./detailed_results-88439820.chunk.js";import{l as B,z as D,b as H,c as U,d as V,e as x,q,f as j,r as z,T as _,n as J,I as K}from"./preset_utils-a31de15d.chunk.js";import{T as $}from"./totem_inputs-9cf64dca.chunk.js";const Q=B({fieldName:"thunderstormRange",label:"Thunderstorm In Range",labelTooltip:"When set to true, thunderstorm casts will cause damage.",getValue:e=>e.getSpecOptions().thunderstormRange==s.TSInRange,setValue:(e,a,l)=>{const t=a.getSpecOptions();t.thunderstormRange=l?s.TSInRange:s.TSOutofRange,a.setSpecOptions(e,t)}}),X=D({fieldName:"shield",values:[{value:e.NoShield,tooltip:"No Shield"},{actionId:a.fromSpellId(57960),value:e.WaterShield},{actionId:a.fromSpellId(49281),value:e.LightningShield}]}),Y={inputs:[H({fieldName:"type",label:"Type",values:[{name:"Adaptive",value:l.Adaptive,tooltip:"Dynamically adapts based on available mana to maximize CL casts without going OOM."},{name:"Manual",value:l.Manual,tooltip:"Allows custom selection of which spells to use and to modify cast conditions."}]}),U({fieldName:"bloodlust",label:"Use Bloodlust",labelTooltip:"Player will cast bloodlust",getValue:e=>e.getRotation().bloodlust==t.UseBloodlust,setValue:(e,a,l)=>{const s=a.getRotation();s.bloodlust=l?t.UseBloodlust:t.NoBloodlust,a.setRotation(e,s)}}),V({fieldName:"lvbFsWaitMs",label:"Max wait for LvB/FS (ms)",labelTooltip:"Amount of time the sim will wait if FS is about to fall off or LvB CD is about to come up. Setting to 0 will default to 175ms"}),U({fieldName:"useChainLightning",label:"Use Chain Lightning in Rotation",labelTooltip:"Use Chain Lightning in rotation",enableWhen:e=>e.getRotation().type==l.Manual}),U({fieldName:"useClOnlyGap",label:"Use CL only as gap filler",labelTooltip:"Use CL to fill short gaps in LvB CD instead of on CD.",enableWhen:e=>e.getRotation().type==l.Manual&&e.getRotation().useChainLightning}),V({fieldName:"clMinManaPer",label:"Min mana percent to use Chain Lightning",labelTooltip:"Customize minimum mana level to cast Chain Lightning. 0 will spam until OOM.",enableWhen:e=>e.getRotation().type==l.Manual&&e.getRotation().useChainLightning}),U({fieldName:"useFireNova",label:"Use Fire Nova in Rotation",labelTooltip:"Fire Nova will hit all targets when cast.",enableWhen:e=>e.getRotation().type==l.Manual}),V({fieldName:"fnMinManaPer",label:"Min mana percent to use FireNova",labelTooltip:"Customize minimum mana level to cast Fire Nova. 0 will spam until OOM.",enableWhen:e=>e.getRotation().type==l.Manual&&e.getRotation().useFireNova}),U({fieldName:"overwriteFlameshock",label:"Allow Flameshock to be overwritten",labelTooltip:"Will use flameshock at the end of the duration even if its still ticking if there isn't enough time to cast lavaburst before expiring.",enableWhen:e=>e.getRotation().type==l.Manual}),U({fieldName:"alwaysCritLvb",label:"Only cast Lavaburst with FS",labelTooltip:"Will only cast Lavaburst if Flameshock will be active when the cast finishes.",enableWhen:e=>e.getRotation().type==l.Manual}),U({fieldName:"useThunderstorm",label:"Allow Thunderstorm to be cast.",labelTooltip:"Disabling this will stop thunderstorm from being cast entirely.",enableWhen:e=>e.getRotation().type==l.Manual,showWhen:e=>e.getTalents().thunderstorm})]},Z={items:[{id:40516,enchant:3820,gems:[41285,40027]},{id:44661,gems:[39998]},{id:40286,enchant:3810},{id:44005,enchant:3722,gems:[40027]},{id:40514,enchant:3832,gems:[42144,42144]},{id:40324,enchant:2332,gems:[42144,0]},{id:40302,enchant:3246,gems:[0]},{id:40301,gems:[40014]},{id:40560,enchant:3721},{id:40519,enchant:3826},{id:37694},{id:40399},{id:40432},{id:40255},{id:40395,enchant:3834},{id:40401,enchant:1128},{id:40267}]},ee={items:[{id:46209,enchant:3820,gems:[41285,40048]},{id:45933,gems:[39998]},{id:46211,enchant:3810,gems:[39998]},{id:45242,enchant:3722,gems:[39998]},{id:46206,enchant:3832,gems:[39998,39998]},{id:45460,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45616,enchant:3599,gems:[39998,39998,39998]},{id:46210,enchant:3721,gems:[39998,40027]},{id:45537,enchant:3606,gems:[39998,40027]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45518},{id:40255},{id:45612,enchant:3834,gems:[39998]},{id:45470,enchant:1128,gems:[39998]},{id:40267}]},ae={items:[{id:48323,enchant:3820,gems:[41285,40155]},{id:47144,gems:[40155]},{id:48321,enchant:3810,gems:[40113]},{id:47552,enchant:3722,gems:[40113]},{id:48325,enchant:3832,gems:[40113,40132]},{id:45460,enchant:2332,gems:[40113,0]},{id:48324,enchant:3604,gems:[40155,0]},{id:47084,enchant:3599,gems:[40132,40113,40113]},{id:47190,enchant:3721,gems:[40113,40113,40113]},{id:47099,enchant:3606,gems:[40113,40113]},{id:46046,gems:[40155]},{id:45495,gems:[40113]},{id:47188},{id:45518},{id:46980,enchant:3834,gems:[40113]},{id:47085,enchant:1128,gems:[40155]},{id:47666}]},le={items:[{id:48328,enchant:3820,gems:[41285,40153]},{id:47468,gems:[40155]},{id:48330,enchant:3810,gems:[40113]},{id:47551,enchant:3722,gems:[40113]},{id:48326,enchant:3832,gems:[40113,40132]},{id:45460,enchant:2332,gems:[40113,0]},{id:48327,enchant:3604,gems:[40155,0]},{id:47447,enchant:3599,gems:[40132,40113,40113]},{id:47479,enchant:3721,gems:[40113,40113,40113]},{id:47456,enchant:3606,gems:[40113,40113]},{id:46046,gems:[40155]},{id:45495,gems:[40113]},{id:47477},{id:45518},{id:47422,enchant:3834,gems:[40113]},{id:47448,enchant:1128,gems:[40155]},{id:47666}]},se={items:[{id:51237,enchant:3820,gems:[41285,40113]},{id:50658,gems:[40155]},{id:50698,enchant:3810,gems:[40113,40113]},{id:50628,enchant:3722,gems:[40155]},{id:51239,enchant:3832,gems:[40113,40134]},{id:50687,enchant:2332,gems:[40155,0]},{id:51238,enchant:3604,gems:[40113,0]},{id:50613,gems:[40113,40113,40113]},{id:51236,enchant:3721,gems:[40113,40155]},{id:50699,enchant:3826,gems:[40134,40113]},{id:50398,gems:[40155]},{id:50664,gems:[40113]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50616,enchant:1128,gems:[40155]},{id:50458}]},te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:3738}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{spellId:58643}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:58774}}},doAtValue:{const:{val:"-4s"}}},{action:{castSpell:{spellId:{spellId:57722}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:58704}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}},{spellIsReady:{spellId:{tag:-1,spellId:2825}}}]}},castSpell:{spellId:{tag:-1,spellId:2825}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}},{spellIsReady:{spellId:{spellId:2825}}}]}},castSpell:{spellId:{spellId:2825}}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:26297}}},{spellIsReady:{spellId:{spellId:16166}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:26297}}},{castSpell:{spellId:{spellId:16166}}}]}}},{action:{condition:{and:{vals:[{not:{val:{spellIsReady:{spellId:{spellId:26297}}}}},{not:{val:{spellIsReady:{spellId:{spellId:16166}}}}},{not:{val:{auraIsActive:{auraId:{spellId:64701}}}}},{not:{val:{auraIsActive:{auraId:{spellId:26297}}}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:2894}}},{or:{vals:[{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{itemId:37660}}},{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{spellId:75466}}},{auraIsActive:{auraId:{spellId:75473}}},{auraIsActive:{auraId:{itemId:47213}}},{auraIsActive:{auraId:{itemId:45490}}},{auraIsActive:{auraId:{spellId:71605}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:71570}}},{auraIsActive:{auraId:{spellId:71572}}},{auraIsActive:{auraId:{spellId:72416}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{itemId:50353}}},rhs:{const:{val:"9"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{itemId:50348}}},rhs:{const:{val:"9"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:60486}}},rhs:{const:{val:"10"}}}}]}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:33697}}},{castSpell:{spellId:{itemId:40212}}},{castSpell:{spellId:{itemId:37873}}},{castSpell:{spellId:{itemId:45148}}},{castSpell:{spellId:{itemId:48724}}},{castSpell:{spellId:{itemId:50357}}},{castSpell:{spellId:{spellId:2894}}}]}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}},{not:{val:{dotIsActive:{spellId:{spellId:58704}}}}}]}},castSpell:{spellId:{spellId:58704}}}},{action:{multidot:{spellId:{spellId:49233},maxDots:3,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},{spellIsReady:{spellId:{spellId:49271}}}]}},castSpell:{spellId:{spellId:49271}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:60043}}}},{action:{castSpell:{spellId:{spellId:49238}}}}]},ie={enabled:!0,type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:59159}}},doAtValue:{const:{val:"-5"}}},{action:{castSpell:{spellId:{spellId:49238}}},doAtValue:{const:{val:"-3.5"}}},{action:{castSpell:{spellId:{spellId:49271}}},doAtValue:{const:{val:"-1.5"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}}]}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}}]}},castSpell:{spellId:{spellId:2825}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.1s"}}}},castSpell:{spellId:{spellId:16166}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.1s"}}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.1s"}}}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:60479}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:64741}}},{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{spellId:67669}}},{auraIsActive:{auraId:{spellId:71605}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:75466}}},{auraIsActive:{auraId:{spellId:75473}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:40432}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:45308}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50340}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50345}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50353}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50348}}},rhs:{const:{val:"10"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:60479}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60479}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:60064}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60064}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:60494}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60494}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:64741}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:64741}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:64713}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:64713}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:67669}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:67669}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:71605}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:71605}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:71636}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:71636}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:75466}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:75466}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:75473}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:75473}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:50353}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:50353}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:50348}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:50348}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:40212}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:55637}}},{auraIsActive:{auraId:{spellId:72416}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:40212}}},rhs:{const:{val:"1s"}}}}]}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"120s"}}}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:60479}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:64741}}},{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{spellId:67669}}},{auraIsActive:{auraId:{spellId:71605}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:75466}}},{auraIsActive:{auraId:{spellId:75473}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:40432}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:45308}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50340}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50345}}},rhs:{const:{val:"10"}}}}]}}]}}]}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:33697}}},{castSpell:{spellId:{itemId:37873}}},{castSpell:{spellId:{itemId:45148}}},{castSpell:{spellId:{itemId:48724}}},{castSpell:{spellId:{itemId:50357}}},{castSpell:{spellId:{spellId:2894}}}]}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}},{not:{val:{spellIsReady:{spellId:{spellId:2894}}}}},{not:{val:{dotIsActive:{spellId:{spellId:58704}}}}},{not:{val:{dotIsActive:{spellId:{spellId:58734}}}}}]}},castSpell:{spellId:{spellId:58704}}}},{action:{multidot:{spellId:{spellId:49233},maxDots:3,maxOverlap:{const:{val:"250ms"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{spellCastTime:{spellId:{spellId:60043}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:60043}}}}}]}},castSpell:{spellId:{spellId:60043}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49271}}},rhs:{const:{val:".92s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:49271}}}}},{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{math:{op:"OpAdd",lhs:{remainingTimePercent:{}},rhs:{const:{val:"4%"}}}}}}]}},castSpell:{spellId:{spellId:49271}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.00s"}}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:33697}}}},{action:{castSpell:{spellId:{itemId:42641}}}},{action:{castSpell:{spellId:{itemId:41119}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:49238}}}}},castSpell:{spellId:{spellId:49236}}}},{action:{castSpell:{spellId:{spellId:49238}}}},{action:{castSpell:{spellId:{spellId:59159}}}}]},ne=x("Pre-raid Preset",{items:[{id:37180,enchant:3820,gems:[41285,42144]},{id:37595},{id:37673,enchant:3810,gems:[42144]},{id:41610,enchant:3722},{id:39592,enchant:3832,gems:[42144,40025]},{id:37788,enchant:2332,gems:[0]},{id:39593,enchant:3246,gems:[40051,0]},{id:40696,gems:[40049,39998]},{id:37791,enchant:3719},{id:44202,enchant:3826,gems:[39998]},{id:43253,gems:[40027]},{id:37694},{id:40682},{id:37873},{id:41384,enchant:3834},{id:40698},{id:40708}]}),de=x("P1 Preset",Z),pe=x("P2 Preset",ee),oe=x("P3 Preset [A]",ae,{faction:i.Alliance}),ce=x("P3 Preset [H]",le,{faction:i.Horde}),re=x("P4 Preset",se),Ie=n.create({totems:d.create({earth:p.StrengthOfEarthTotem,air:o.WrathOfAirTotem,fire:c.TotemOfWrath,water:r.ManaSpringTotem,useFireElemental:!0}),type:l.Adaptive,fnMinManaPer:66,clMinManaPer:33,useChainLightning:!1,useFireNova:!1,useThunderstorm:!0}),me=q("Legacy",I.SpecElementalShaman,Ie),ue=j("Default",te),he=j("Advanced",ie),ge={name:"Standard",data:m.create({talentsString:"0533001523213351322301351-005050031",glyphs:u.create({major1:h.GlyphOfFlametongueWeapon,major2:h.GlyphOfTotemOfWrath,major3:h.GlyphOfLightningBolt,minor1:g.GlyphOfThunderstorm,minor2:g.GlyphOfWaterShield,minor3:g.GlyphOfGhostWolf})})},ve=v.create({shield:e.WaterShield,bloodlust:!0,totems:d.create({earth:p.StrengthOfEarthTotem,air:o.WrathOfAirTotem,fire:c.TotemOfWrath,water:r.ManaSpringTotem,useFireElemental:!0})}),Se={distanceFromTarget:20,profession1:S.Engineering,profession2:S.Tailoring,nibelungAverageCasts:11},fe=f.create({defaultPotion:A.PotionOfWildMagic,flask:O.FlaskOfTheFrostWyrm,food:T.FoodFishFeast}),Ae=z(I.SpecElementalShaman,{cssClass:"elemental-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],warnings:[e=>({updateOn:b.onAny([e.player.rotationChangeEmitter,e.player.currentStatsEmitter]),getContent:()=>{const a=e.player.getCurrentStats().sets.includes("Skyshatter Regalia (2pc)"),l=e.player.getRotation().totems,s=l&&l.earth&&l.air&&l.fire&&l.water;return a&&!s?"T6 2pc bonus is equipped, but inactive because not all 4 totem types are being used.":""}})],epStats:[y.StatIntellect,y.StatSpellPower,y.StatSpellHit,y.StatSpellCrit,y.StatSpellHaste,y.StatMP5],epReferenceStat:y.StatSpellPower,displayStats:[y.StatHealth,y.StatMana,y.StatStamina,y.StatIntellect,y.StatSpellPower,y.StatSpellHit,y.StatSpellCrit,y.StatSpellHaste,y.StatMP5],modifyDisplayStats:e=>{let a=new R;return a=a.addStat(y.StatSpellHit,e.getTalents().elementalPrecision*w),a=a.addStat(y.StatSpellCrit,1*e.getTalents().tidalMastery*L),{talents:a}},defaults:{gear:ce.gear,epWeights:R.fromMap({[y.StatIntellect]:.22,[y.StatSpellPower]:1,[y.StatSpellCrit]:.67,[y.StatSpellHaste]:1.29,[y.StatMP5]:.08}),consumes:fe,rotation:Ie,talents:ge.data,specOptions:ve,other:Se,raidBuffs:C.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:G.TristateEffectImproved,moonkinAura:G.TristateEffectImproved,sanctifiedRetribution:!0,demonicPact:500,wrathOfAirTotem:!0}),partyBuffs:N.create({}),individualBuffs:M.create({blessingOfKings:!0,blessingOfWisdom:2,vampiricTouch:!0}),debuffs:P.create({faerieFire:G.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,curseOfElements:!0,shadowMastery:!0,heartOfTheCrusader:!0})},playerIconInputs:[X],rotationInputs:Y,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[Q,_,J]},customSections:[$],encounterPicker:{showExecuteProportion:!1},presets:{talents:[ge],rotations:[me,ue,he],gear:[ne,de,pe,oe,ce,re]},autoRotation:e=>ue.rotation.rotation,raidSimPresets:[{spec:I.SpecElementalShaman,tooltip:k[I.SpecElementalShaman],defaultName:"Elemental",iconUrl:W(F.ClassShaman,0),talents:ge.data,specOptions:ve,consumes:fe,defaultFactionRaces:{[i.Unknown]:E.RaceUnknown,[i.Alliance]:E.RaceDraenei,[i.Horde]:E.RaceOrc},defaultGear:{[i.Unknown]:{},[i.Alliance]:{1:de.gear,2:pe.gear,3:oe.gear,4:re.gear},[i.Horde]:{1:de.gear,2:pe.gear,3:ce.gear,4:re.gear}}}]});class Oe extends K{constructor(e,a){super(e,a,Ae)}}export{Oe as E};
//# sourceMappingURL=sim-d055eeb5.chunk.js.map

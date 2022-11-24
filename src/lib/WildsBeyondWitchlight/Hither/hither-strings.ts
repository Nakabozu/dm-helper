export const hitherStrings = {
    overview: {
        camping: `Roll 1d8 and consult the table for camping outside of a sanctuary. Setting up camp in Hither is has much few ups than downs due to it's transformation.  
            As you fix o'wells, the negative effects of sleeping in Hither fade away, but until then, camping will be a grueling experience.`,
        campingTable: [
            // BAD
            `A band of 1d4 harengon brigands and 1d4 harengon snipers ambushes you in your sleep.  
                You get none of the benefits of a long rest and immediately start combat unarmored.
                If nobody was keeping watch, the bandits get one surprise round against you.`,
            `A army of frogs and toads croak loudly throughtout the night making your sleep restless.  You only recover half of your spellslots and ki.`,
            `A swarm of biting insects plagues you while you rest, draining your blood and sanity.  You only recover half of your max HP and a quarter of your hit die.`,
            `A poisonous swamp fog rolls over your camp as you rest.  Roll a DC 10 CONSTITUTION SAVING THROW throw or become poisoned until you complete another long rest.`,
            `An o'well near you spews water like a geyser in the middle of the night, flooding your camp in the middle of the night.  You cannot recover from exhaustion as you wake up soaked from head to toe.`,
            // GOOD
            `The Feywild sun shines a golden beam of light through a mossy tree to wake you up.  Camping went better than expected.  Your long rest is successful.`,
            `You camp peacefully, and when you awaken, 1d8 delicious smelling mushrooms seem to have grown close to your camp.  
                Each mushroom grants 1 Temp HP when eaten, or 2 if cooked by someone proficient with chef's tools.  This effect expires after your next meal.`,
            `For once, hither blesses you. The night passes quietly.  The moss under you is softer than memory foam.  
                You feel as though you're one with nature as you rest and meditate in peace.  Gain 5 temp HP that expire after your next long rest.`,
        ]
    },
    owells: {
        approach: `As you near the bubbling o'well, the stench of rotting vegitation grows stronger.  
            Buzzing and croaking is heard loudly from every direction.
            INVESTIGATION (DC 14): Those of you brave enough to attempt to peer into the well see a viscous orb as clear as glass with a humanoid creature inside.  
            Water turns a sickly green as it passes through the orb and the well vomits it onto the ground.
            IF PARTY ATTEMPTS TO REMOVE IT WITHOUT IOTONE: Whatever it is, it's lodged in tightly and harder than steel.  Try as you might, there's nothing you can do to pry it free.`,
        removingLornlings: `When a lornling is removed, roll 1d8 and consult the encounters table to see the encounter. To remove lornlings, you need iotone.  
            This concentrated fluid is made from the tears of Eachthighern (EK-tee-arn), the unicorn deity of healing, loyalty, protection, and purification.  
            Cheap knockoffs made from unicorn tears are a quarter as effective as the real thing, but much more common on the black market.
            Blanca has a vile of true iotone, which she obtained by having Agdon steal all of Eachthighern's pomegranates, which are his favorite food.
            She will give it to players who ask for it in exchange for sparing Agdon, or if she is fond of them for whatever reason.`,
        encounters: [
            {title: "Giant Dragonflies", text: ` With a squeeze of the dropper, you see a disgusting patchwork cloth dart around in the swampy water.  
            As you squint for a better look, you catch the creature darting to the surface to shoot into the air.  
            With a cackle and the wave of a hand, it sprays a noxious mist over the surrounding bog and the dragonflies grow to a monsterous size.`},
            {title: "Heartstabber Mosquitos", text: ` As you approach the next o'well, the smell of fettid water sours your stomach.  
            Swarms of biting insects flit about you, looking for a meal.  You take your dropper and quickly dispence a drop of the precious liquid.
            With a burst of speed, a lornling flies from the o'well and shoots a vile ray into a cloud of insects, causing a handful of mosquitoes to swell to a deadly size`},
            {title: "Giant Toad and Giant Frogs", text: `As you approach the next o'well, the mad cacophany of croaks assaults your ears from every direction.
            It's enough to drive you insane. `},
            {title: "Crocodile and Giant Poisonous Snakes", text: `The well here `},
            {title: "", text:``},
            {title: "Detached Shadow", text: `The trek to this o'well is longer than normal and the unpredictable sun of Prismeer has danced its way behind you as you traveled.  
            Your shadows stretch far in front of you to touch the o'well long before you can.  You step forward, and the lornling is ready for you.`},
            {title: "Premature Lornling Swarm (homebrew)", text: ``},
            {title: "FINALE! Character's Reflections", text: `  As you approach the final o'well, you look around at the swamp.  
                The water isn't as murky as it once was.  It's creatures, more skittish than aggressive.  It feels closer to home than it ever has before.
                When you reach the o'well, it's burbling is weak and forced.  You peer down into it to detach the lornling within the well, but it is already free and staring right at you.
                From your reflections in the well water and the pools of water around you, ascends a mirrored copy of yourselves, poised to fight to defend the final o'well.`}
        ]
    },
    telemyHill: {
        important: [
            `A lornling corrupts Telemy deep from within.  Jingle Jangle knows of a path into telemy, but it's dangerous to descend.`,
            ``,
            ``,
            ``,
            ``
        ],
        meetingJingle: `After completing the puzzle, a keyhole in the stone grows to reveal worn stone steps leading down into what feels like a cellar. 
        A chill wind caresses you as you hear rhythmic steps on stone and smell the subtle scent of metal on the air.  
        From out of the passage, a goblin appears.
        She looks thin and frail, wears a coat lined with metal keys, and carries a flail that has padlocks for heads.
        She manages a faint smile and says, “Such brave folk to climb Telemy Hill in its current state.  How might Jingle Jangle unlock a bit of happiness in your lives today?”`,
        jinglesChamber: `From a distant spot within the chamber, sputtering candles illuminate a multitude of keys dangling from taut strings that crisscross the walls.
        Hundreds of other keys lie strewn across the dirt floor.
        As you take in the scene, you hear the sound of keys jingling as a goblin emerges from the dimness.`,
        insight: [`Jingle Jangle is friendly. She collects keys and talks about them endlessly.
        She wears a coat of keys that jingle and jangle when she walks—hence her name.
        She used to be great friends with Telemy Hill, the voice of the land of Hither, before Bavlorna visited and Telemy began to change.
        She was raiding the hill for fruit and truffles when she was spotted by one of Telemy Hill's trees and attacked.  
        She has been in recovery for weeks, and her food and water stores are nearly depleted. 
        What's left is rotting and tainted.`],
        taleOfWoe: `Jingle Jangle was sneaking around, digging for the truffles that dot the top of Telemy, when Jingle Jangle's cloak of muting slipped.  
        The clinks of Jingle Jangle's keys alerted the trees.`,
        offerings: `A bag of truffles, a tasty snack, or purification of her rotten food.
        A thirst-quenching beverage or purification of her tainted water.
        Healing for her wounds.`,
        theCore: `Jingle Jangle leads you to a spiraling path claiming "This will take you to the core, but it's too much for Jingle Jangle."
        You descend down the path for minutes on end.  Let me know if you'd like to react to anything on your way down.  
        You descend so far your ears pop and you still can't see the bottom. You continue futher down, your hair stands on end.  
        Even further and you hear raspy chuckles in your mind.  The smell of the bog is stronger than ever.
        Further still hideous tendrils creep from the darkness just beyond your vision.`
    }
};
const buttons = document.querySelectorAll(
    ".category-button"
);

const result = document.querySelector(
    "#result"
);

const nameInput = document.querySelector(
    "#nameInput"
);

const saveButton = document.querySelector(
    "#saveButton"
);

const againButton = document.querySelector(
    "#againButton"
);

const categories = document.querySelector(
    ".categories"
);

const actionButtons = document.querySelector(
    ".action-buttons"
);

const signers = [

    {
        name: "Dirt Man",
        title: "Licensed Grounding Specialist"
    },

    {
        name: "Seemingly Trustworthy Guy in the Parking Lot",
        title: "Provider of Questionable Wisdom"
    },

    {
        name: "Mothman",
        title: "Certified Nighttime Observer"
    },

    {
        name: "Deb, a Cigarette Mom",
        title: "Emotional Support Professional"
    },

    {
        name: "Cute Little At Peace Frog",
        title: "Morale Officer"
    },

    {
        name: "Cheryl, who says 'hon' to everyone",
        title: "Certified Comfort Presence"
    },

    {
        name: "That One Auntie with the Windchimes",
        title: "Atmosphere Coordinator"
    },

    {
        name: "A Medieval Snail",
        title: "Slow Living Consultant"
    },

    {
        name: "A Tired Angel from 2007",
        title: "Senior Emotional Exhaustion Analyst"
    },

    {
        name: "Person Who Has Definitely Cried in a Parking Lot Before",
        title: "Empathy and Recovery Specialist"
    },

    {
        name: "Woman Standing Motionless in the Kitchen at 11:48 PM",
        title: "Late Night Processing Coordinator"
    },

    {
        name: "Guy Who Needed to Sit in the Car for a Minute",
        title: "Certified Decompression Specialist"
    },

    {
        name: "Person Carrying Too Many Reusable Bags",
        title: "Burden Management Consultant"
    },

    {
        name: "The Friend Who Says 'No Worries' Even When There Are Worries",
        title: "Conflict Diffusion Professional"
    }
];

buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            categories.classList.add(
                "hidden"
            );

            const category =
                button.textContent.trim();

            const name =
                nameInput.value.trim() ||
                "The bearer of this note";

            const categoryPhrases = {

                "the hustle":
                    "participating in the demoralizing never-ending hustle",

                "the horrors":
                    "coexisting with the horrors",

                "the notifications":
                    "responding to the relentless notifications",

                "the expectations":
                    "meeting the unbearable expectations placed upon them",

                "the constant bids for my attention":
                    "responding to the constant bids for their attention",

                "the overwhelming sense that something is wrong":
                    "carrying the overwhelming sense that something is wrong",

                "being perceived":
                    "being perceived by others at this time"
            };

            const fullCategory =
                categoryPhrases[category];

            const excuses = {

                "the hustle": [

                    `${name} has exceeded the federally recommended limit for striving.`,

                    `${name} requires an afternoon of staring out the window thinking about nothing.`,

                    `${name} has been advised to stop trying to optimize every waking moment.`,

                    `${name} needs one beautiful day untouched by ambition.`,

                    `${name} needs a little treat and fresh air.`
                ],

                "the horrors": [

                    `${name} requires immediate access to tiny joys and soft lighting.`,

                    `${name} needs to lay face down on the floor for a while.`,

                    `${name} has exceeded the recommended lifetime limit for enduring the horrors gracefully.`,

                    `${name} requires one day with absolutely no character development.`
                ],

                "the notifications": [

                    `${name} needs to put the phone face down and stare out the window for a while.`,

                    `${name} has been advised to bury their phone in the garden.`,

                    `${name} needs to disappear briefly and come back when the atmosphere improves.`,

                    `${name} requires temporary freedom from the relentless digital summons.`
                ],

                "the expectations": [

                    `${name} requires temporary freedom from the pressure to become their highest self.`,

                    `${name} needs one strange little day with no measurable outcomes.`,

                    `${name} requires several hours of harmless wandering.`,

                    `${name} requires complete exemption from being impressive at this time.`,

                    `${name} has been advised to stop trying to optimize every moment of existence.`
                ],

                "the constant bids for my attention": [

                    `${name} requires six to eight business hours without additional stimuli.`,

                    `${name} has temporarily lost the ability to respond “of course!” convincingly.`,

                    `${name} needs one uninterrupted afternoon with absolutely nobody needing anything.`,

                    `${name} has been instructed to protect their remaining fragments of attention carefully.`,

                    `${name} needs one uninterrupted hour of silence and indirect sunlight.`
                ],

                "the overwhelming sense that something is wrong": [

                    `${name} has been advised to sit near water and not think at all.`,

                    `${name} requires soft lighting and gentle atmospheric conditions.`,

                    `${name} requires temporary relief from the lingering sense that the atmosphere is wrong.`,

                    `${name} requires complete emotional clearance from the ambient sense of impending doom.`
                ],

                "being perceived": [

                    `${name} needs to wear headphones and avoid eye contact until further notice.`,

                    `${name} requires one afternoon of invisible anonymous wandering.`,

                    `${name} needs to exist quietly like a background character.`
                ]
            };

            const options =
                excuses[category];

            const randomIndex =
                Math.floor(
                    Math.random() * options.length
                );

            const excuse =
                options[randomIndex];

            const signerIndex =
                Math.floor(
                    Math.random() * signers.length
                );

            const signer =
                signers[signerIndex];

            result.innerHTML = `

                <div class="result-title">
                    OFFICIAL EXCUSE
                </div>

                <p>
                    Please excuse
                    <strong>${name}</strong>
                    from
                    <strong>${fullCategory}</strong>.
                </p>

                <p>
                    ${excuse}
                </p>

                <p class="signature">
                    Signed,<br><br>

                    ${signer.name}<br>

                    <span class="signer-title">
                        ${signer.title}
                    </span>
                </p>

            `;

            result.classList.remove(
                "hidden"
            );

            actionButtons.classList.remove(
                "hidden"
            );
        }
    );
});

againButton.addEventListener(
    "click",
    function () {

        result.classList.add(
            "hidden"
        );

        actionButtons.classList.add(
            "hidden"
        );

        categories.classList.remove(
            "hidden"
        );
    }
);

saveButton.addEventListener(
    "click",
    function () {

        const shareWindow =
            window.open(
                "",
                "_blank"
            );

        const excuseHTML =
            result.innerHTML;

        shareWindow.document.write(`

            <!DOCTYPE html>

            <html lang="en">

            <head>

                <meta charset="UTF-8">

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                >

                <title>
                    Please Excuse
                </title>

                <style>

                    body {

                        margin: 0;

                        min-height: 100vh;

                        display: flex;

                        justify-content: center;
                        align-items: center;

                        padding: 40px 18px;

                        box-sizing: border-box;

                        background:
                            linear-gradient(
                                to bottom,
                                #f7f1e8 0%,
                                #efe6da 100%
                            );

                        font-family:
                            "Tahoma",
                            sans-serif;
                    }

                    .story {

                        width: 100%;

                        max-width: 980px;

                        padding: 52px 48px;

                        border-radius: 32px;

                        background:
                            rgba(255,255,255,0.82);

                        border:
                            2px dashed #d7c8da;

                        box-shadow:
                            0 8px 30px rgba(170,150,140,0.12);

                        color: #675b63;

                        line-height: 2;

                        font-size: 1.2rem;

                        position: relative;

                        box-sizing: border-box;
                    }

                    .story::before {

                        content: "APPROVED";

                        position: absolute;

                        top: 15px;
                        right: 22px;

                        font-size: 1rem;

                        letter-spacing: 3px;

                        color:
                            rgba(
                                207,
                                98,
                                98,
                                0.72
                            );

                        border:
                            2px solid
                            rgba(
                                207,
                                98,
                                98,
                                0.72
                            );

                        padding: 8px 14px;

                        border-radius: 8px;

                        transform:
                            rotate(8deg);

                        opacity: 0.82;

                        font-weight: bold;
                    }

                    .result-title {

                        margin-bottom: 32px;

                        font-size: 1rem;

                        letter-spacing: 2px;

                        color: #9b7d92;
                    }

                    .signature {

                        margin-top: 50px;

                        line-height: 1.8;
                    }

                    .signer-title {

                        display: block;

                        margin-top: 6px;

                        font-size: 0.82rem;

                        letter-spacing: 1px;

                        text-transform: uppercase;

                        opacity: 0.6;
                    }

                </style>

            </head>

            <body>

                <div class="story">

                    ${excuseHTML}

                </div>

            </body>

            </html>

        `);

        shareWindow.document.close();
    }
);

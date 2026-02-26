import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const PrivacyPolicy = () => {
    return (
        <>
            <Breadcrumb items={[
                { label: 'Home', path: '/' },
                { label: 'Legal', path: '/legal' },
                { label: 'Privacy Policy', path: '/legal/privacy' }
            ]} />
            <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                    Privacy Policy
                </h1>

                <p className="text-lg text-slate-600 mb-12">
                    At <span className="font-semibold text-slate-900">IPTV Generator</span>, Your privacy matters most. What we value above all stands right here.
                    This document explains the way we gather, handle, and secure your personal data whenever
                    You’re on our site. Using it means acceptance of these rules
                    explained just after this line.

                </p>

                <div className="space-y-12 text-slate-700 leading-relaxed">

                    {/* Section: Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            When you interact, data gets gathered so things run smoother. What we gather might be details like:
                        </p>

                        <ul className="list-disc ml-6 space-y-2">
                            <li>
What you share - like a name, email, phone number - sticks around when you reach out or use what we offer. Details given freely during interactions stay part of the record. Each piece you hand over gets kept without extra notice. Name included? That counts too. Reaching us through forms means those inputs remain stored. Using a tool here logs whatever info flows in. Voluntary submissions become part of how things run behind scenes.                                or any details you voluntarily provide when contacting us or using our tools.
                            </li>
                            <li>
                                What you do on our site gets recorded - things like where you’re logging in from, what kind of phone or computer you use, which browser opens the page. The system notes when you arrive and how long you stay. Pages viewed right before coming here show up too. Even the ones you click off to afterward get tracked. Every visit leaves behind small digital footprints without asking.
                            </li>
                            <li>
                                Performance on the website gets a boost because small data pieces track activity. Preferences stay saved thanks to those automatic markers tucked into your browser. Behavior insights come from observing how people move through pages, quietly collected behind the scenes.
                            </li>
                        </ul>
                    </section>

                    {/* Section: How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                        <p className="mb-4">
Every bit of info helps tweak how things work here. What you share shapes updates that keep everything running smooth. Sometimes details go toward making sure connections stay safe. Your activity can guide changes meant to speed up tasks. Details might help spot where fixes are needed. This keeps tools working without hiccups. Info flows into upgrades behind the scenes
                        </p>

                        <ul className="list-disc ml-6 space-y-2">
                            <li>Setting up profiles happens only when needed. Handling access details comes after that step.</li>
                            <li>Improve website performance, stability, and responsiveness.</li>
                            <li>Got questions or need help? We’re here to answer them. Whatever comes up, we’ll get back fast. No waiting around. Just clear replies when you reach out. Help is always close by.</li>
                            <li>Watch how people use the site to shape what comes next. A steady look at numbers shows where changes matter most.</li>
                            <li>Staying within the law helps prevent abuse. What matters is following rules that keep things fair. Misuse becomes less likely when boundaries are clear. Laws exist not just to guide but also to shield. Following them means fewer risks piling up later.</li>
                        </ul>
                    </section>

                    {/* Section: Sharing of Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing and Disclosing Information</h2>
                        <p>
Your personal details stay safe with us - never sold, never traded. Sharing happens solely under these conditions:                        </p>
                        <ul className="list-disc ml-6 space-y-2 mt-2">
                            <li>
                               Some helpers handle your site’s home on the web, track visits, or guard it tightly - each one sworn to silence through legal promises.
                            </li>
                            <li>
                                Authorities get involved if rules demand it, or whenever someone tries to abuse the system. Protection kicks in when laws say so, especially if harm comes near. When things go wrong legally, oversight steps forward just in time. Compliance appears not by choice but because boundaries shift under pressure. Safeguarding begins once threats show their face quietly.
                            </li>
                        </ul>
                    </section>

                    {/* Section: Data Protection */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Protection and Security</h2>
                        <p>
Information stays safe through strong safeguards against access, changes, or loss. Though nothing runs perfectly forever, updates roll out regularly to strengthen defense and trust. Protection moves ahead one step at a time.
                        </p>
                    </section>

                    {/* Section: Third-Party Links */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
                        <p>
Links to outside websites might appear on our site. Content hosted elsewhere falls beyond our control. Their rules, how they handle data - none of that is under our oversight. Check their privacy details first if you plan to engage.
                        </p>
                    </section>

                    {/* Section: Updates */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to our Privacy Policy</h2>
                        <p>
                    Now and then, this Privacy Policy gets tweaks when how we do things shifts. Changes show up right here, tagged with a new date they take effect. Checking back from time to time keeps you in the loop.
                        </p>
                    </section>

                    {/* Section: Contact */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                        <p>
                         Got a question about this Privacy Policy? We’re here whenever you need help - reach out using the support page online. Trouble understanding something? Messages come straight to our team when sent that way. Want to share feedback? The official portal handles those too, anytime it suits you.
                        </p>
                    </section>

                </div>
            </div>
        </div>
        </>
    );
};

export default PrivacyPolicy;

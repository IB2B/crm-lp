# Conversion Best Practices for a B2B SaaS / CRM Landing Page Aimed at SMB Owners (White-labeled GoHighLevel, sold by Intelligent B2B)

Scope note: the evidence here is uneven. The strongest data comes from large first-party datasets (Unbounce 2024 benchmark, 41k pages and 57M conversions), NN/g eye-tracking, Google's web.dev case studies, and law-firm summaries of regulation. Many popular CRO "stats" circulating online come from vendor blogs that copy each other, and these are flagged below. Studies from before 2023 are marked **[OLDER]**.

## Hero section: headlines, value-prop clarity, visual vs video, above-the-fold CTA, benchmarks

### Takeaway
The median SaaS landing page converts at 3.8%, compared with 6.6% across all industries. SaaS copy is the hardest to read of any industry, and pages written at a 5th to 7th grade reading level convert far better. The hero should state a plain-language outcome and show a primary CTA in the first screen, because most viewing time happens there. No rigorous public test settles whether a hero video beats a product image.

### Cited Findings
- Unbounce 2024 Conversion Benchmark Report (data from Jul 2023 to Jul 2024; 464M visitors, 57M conversions, 41k+ pages). The SaaS median conversion rate is **3.8%**, 42% below the all-industry median of **6.6%**. Within SaaS, hardware converts at 4.1% and data/infrastructure at 3.3%. — [Unbounce SaaS benchmark](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/)
- SaaS median conversion by channel: email **16.9%**, paid search 4.1% (Google Ads 5.1%, Bing 1.9%), paid social 2.9% (Facebook 3.5% median, with top Facebook pages at 11–24%; Instagram 9.2%), display 0.3%. — [Unbounce SaaS benchmark](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/)
- Readability in Unbounce SaaS data: copy at a 5th–7th grade level converts at **12.9%**, while professional-level copy converts at 2.1%. The best-converting length is **250–725 words**, and the best pages use roughly 50–140 "difficult" (3+ syllable) words. — [Unbounce SaaS benchmark](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/)
- Unbounce: "conversion rates trend up as a SaaS landing page becomes easier to read and down as you use more words". SaaS pages have the most difficult copy of all industries in the report. These findings are correlational, from platform data, not A/B tests. — [Unbounce industry page](https://unbounce.com/?p=94345); [Unbounce methodology](https://unbounce.com/conversion-benchmark-report/methodology/)
- Cross-industry, Unbounce 2024 found that difficult words are the factor most strongly tied to lower conversion, and that the correlation is 62% stronger than in 2020. — [Bill Hartzer summary of Unbounce 2024](https://www.billhartzer.com/pay-per-click/shocking-decline-in-attention-spans-unbounces-2024-report-reveals-critical-mistakes-that-are-hurting-your-conversion-rates/)
- Conflicting Unbounce figure: an older Unbounce industry page gives a 2.9% SaaS median with a top quartile at 24.2%, and the 2021 report gave 3.0%. The year behind the 2.9% figure is unclear. Use 3.8% (2024) as the current anchor. — [contentgrip summary](https://www.contentgrip.com/conversion-rate-business-benchmark/)
- NN/g eye-tracking **[OLDER, 2018]**: users spent about **57%** of page-viewing time above the fold, 74% in the first two screenfuls, 17% on the second screen, and the remaining 26% in a long tail. In 2010 the above-the-fold share was 80%. NN/g notes that some of this reflects short pages, and it measures viewing time, not conversion. — [NN/g Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- Hero video vs image: no published, controlled SaaS hero test was found. The commonly quoted Wistia claim of "3–4x better conversion with video" is old and anecdotal, and the "2–6x" claim has no source. — [Common Craft interview](https://commoncraft.com/node/4251)
- One test reported by SaaSHero: moving **video testimonials higher on the page** raised conversion from 3.91% to 6.38% (IMD Business School). This tested where testimonials sit, not a hero video. — [SaaSHero](https://saashero.net/content/b2b-saas-landing-page-examples/)
- Testing guidance: when comparing video and image, keep the message and CTA identical, track CTA CTR and form starts, and segment by mobile vs desktop, because load time and autoplay behave differently on each. — [Optibase](https://optibase.io/ab-testing-ideas/video-vs-image); [GoStellar](https://www.gostellar.app/blog/ab-test-idea-videos-vs-images)

### Inferences
- Use a headline about the outcome in SMB language, aimed at a 5th–7th grade reading level (for example, "Every lead, text, review and invoice in one app", not "unified omnichannel CRM platform"). Put the primary CTA and a "replaces X tools" proof line in the first viewport. Run the copy through Flesch-Kincaid checks.
- Keep the total page copy within about 250–725 words where possible. Move detail into accordions (FAQ, feature tabs) so the visible word count stays low.
- For the visual, a static product screenshot or a looping, muted, lightweight UI animation is the safer default because it does less damage to LCP. Offer a short click-to-play demo video (60–90s), not an autoplay hero video. A/B test video against image if traffic allows.
- If the agency uses email nurtures, they are the highest-converting traffic source (16.9% median), so send dedicated variants or UTM-segmented hero copy to email traffic. Paid social traffic converts at about 2.9–3.5%, so plan budgets on those numbers.

### Gaps
- No 2023–2026 controlled study isolated headline formulas (for example question vs statement, or numbers vs no numbers) specifically for SaaS. Wynter's published research on B2B messaging could not be retrieved, only its methodology pages. — [Wynter research playbook](https://wynter.com/research-playbook)
- No CRM-specific or GHL-specific landing page conversion benchmark was found.

## CTA strategy: trial vs demo, card-required trials, CTA repetition and sticky CTAs, form length, multi-step, calendar embeds

### Takeaway
Card-required (opt-out) trials convert roughly 2.5–3x better to paid, but they produce far fewer signups. Visitor-to-paid totals can favour opt-out, but the data comes from vendor-aggregated sources. For a hybrid self-serve plus done-for-you offer, a dual CTA works best: a primary "Start trial" or "Get started" and a secondary "Book a setup call". Add an embedded calendar so the form flows straight into a booked meeting. Use short forms, keep phone and textarea fields out of the first step, and add a sticky CTA on mobile.

### Cited Findings
- First Page Sage dataset (86 SaaS companies, Q1 2022–Q3 2025), as relayed by secondary sources: opt-out (card-required) trials convert to paid at **48.8%** and opt-in trials at **18.2%**. Visitor-to-trial is **8.5% for opt-in** and **2.5% for opt-out**. — [Flint](https://www.flint.com/blog/b2b-saas-free-trial-conversion-rate-statistics); [Shno](https://www.shno.co/marketing-statistics/free-trial-conversion-statistics)
- Flint says opt-out trials yield 10.5 paying customers per 1,000 visitors, against 3.6 for no-card trials. Its median B2B trial-to-paid figure is 18.5%. It is a vendor blog and its methodology is unverified. — [Flint](https://www.flint.com/blog/b2b-saas-free-trial-conversion-rate-statistics)
- Sources disagree on opt-in conversion. ChartMogul and Poyar data (via Userpilot) put card-required free-to-paid at about 30% and opt-in at 4–6% average (10–15% great). Softletter puts opt-out at 50% and opt-in at 25%. Sixteen Ventures treats >25% opt-in and >60% opt-out as strong. — [Userpilot](https://userpilot.com/blog/how-does-a-free-trial/); [Memberkitchens](https://memberkitchens.com/blog/the-pros-and-cons-of-collecting-credit-cards-upfront-for-free-trials); [Sixteen Ventures](https://sixteenventures.com/saas-free-trial-benchmarks/)
- Kyle Poyar, ProductLed and ChartMogul (Jan 2026, 200 B2B products): the median free-trial conversion is **8%**. 20% of trial products convert below 2.5% and 23% convert above 25%, a roughly 10x gap between the top and bottom quintiles. This comes via Userpilot's summary. — [Userpilot](https://userpilot.com/blog/free-trial-conversion-rate/)
- No Poyar or OpenView benchmark comparing demo-request funnels with trial funnels for SMB was found. — [Growth Unhinged reverse trials](https://kylepoyar.substack.com/p/your-guide-to-reverse-trials)
- Form fields **[OLDER, HubSpot analysis of 40k+ landing pages, ~2010s]**: conversion falls slightly as fields increase, but less steeply than expected. **Textareas** have a powerful depressing effect and multiple **dropdowns** also hurt, while single-line text fields barely matter. — [HubSpot](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx)
- Asking for a phone number is reported to cause an 18.7% drop (Formisimo, relayed second-hand). Multi-step uplift claims range from "86%" to "up to 300%", and none can be traced to a published study, so treat them as unreliable. — [Reform](https://reform.app/blog/single-page-vs-multi-step-forms-which-converts-better); [Whitehat SEO](https://whitehat-seo.co.uk/blog/inbound-marketing-convert-forms)
- HubSpot's knowledge base recommends splitting complex forms into short steps to reduce information fatigue, but gives no figure. — [HubSpot KB](https://knowledge.hubspot.com/forms/increase-form-conversion-rates?pix=6f_0_0)
- Instant scheduling after a form (Chili Piper vendor case studies): Workato's qualified inbound-to-meeting rate rose from about 40–55% to **75–80%**, and booked demos rose 50%. ChowNow's inbound close rate rose 4x when prospects booked through instant scheduling. These are vendor-reported, with no independent benchmark. — [Chili Piper Workato](https://www.chilipiper.com/customers/workato); [Chili Piper ChowNow](https://www.chilipiper.com/customers/chownow)
- Sticky CTA tests (agency-published, mostly ecommerce, so expect selection bias): a mobile homepage sticky CTA lifted conversion **+20.4%** (95.1% probability to beat control), and a sticky PDP CTA lifted it +16.27%. Others gained +7–10%, and some were non-significant or showed lower AOV. — [Convertibles](https://convertibles.dev/blogs/case-studies/homepage-sticky-cta-case-study); [Blend Commerce](https://blendcommerce.com/blogs/ab-tests-shopify/adding-a-sticky-cta-to-the-product-detail-page); [Clean Commit](https://cleancommit.io/ab-tests/sticky-mobile-add-to-cart-button/)
- Hubstaff placed testimonials and logos directly under the CTA and reached 10.95% conversion against 6.89% for the control (+59%). This is a single vendor-reported case. — [Discovered Labs](https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact)

### Inferences
- The offer is a low-ticket SMB subscription with an optional done-for-you upsell. The page should have **one primary CTA** ("Start your 14-day trial" or "Get started") and **one secondary CTA** ("Book a free setup call"), repeated after each major section and in a sticky mobile bar.
- Card-required vs no-card: if the funnel is mainly paid social and cold traffic, a no-card trial maximises volume and the agency can qualify leads through onboarding calls. If sales capacity is limited and revenue per visitor matters most, require a card. This is a strong A/B candidate. GHL's own SaaS mode supports card-on-file trials, but this was not verified here.
- Form: step 1 asks for name, email and business type. Step 2 asks for phone (with TCPA-compliant SMS consent; see legal section), team size and current tools. Then show an embedded calendar (GHL's native calendar widget or Calendly) right after submission, so the lead books immediately instead of waiting for a callback.
- Avoid free-text "tell us about your business" textareas in the first step.

### Gaps
- No rigorous 2023–2026 SMB-specific data comparing "Book a demo" with "Start free trial" CTAs.
- No primary published study of multi-step form uplift was found. All the percentages are vendor marketing.
- No independent benchmark exists for calendar-embed form-to-meeting rates.

## Trust signals: testimonials, logos, reviews, metrics, guarantees, security badges, founder presence (for a newer brand)

### Takeaway
B2B buyers trust peer reviews and specific, quantified testimonials more than vendor claims. A new agency brand without big logos should borrow credibility from the platform's scale (GHL's user base and review-site ratings), its own client results with real names and photos, video testimonials placed high on the page, and visible founder or team presence. Add a clear, specific guarantee. Guarantees have shown about a 20% lift in a non-SaaS test.

### Cited Findings
- Review sites: one blog relays G2's 2024 Buyer Behavior Report, saying public review sites are the information source B2B buyers consult most (31%, up from 13% in 2021). This was not verified against G2's primary report. — [Autobound](https://www.autobound.ai/blog/how-to-turn-g2-rankings-into-pipeline-social-proof-b2b-sales)
- Gartner (relayed second-hand, 3,500 software buyers): social proof influenced 90% of buyers comparing products, and customer reviews were the most influential source (41%) when building a vendor shortlist. Verify with Gartner before relying on it. — [Discovered Labs](https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact)
- TrustRadius (relayed): buyers trust peer reviews 25% more than sales reps. Widely repeated "86–92% read reviews" stats trace back to one or two surveys and conflict with each other. — [Reviewflowz](https://reviewflowz.com/blog/social-proof); [Peerbound](https://www.peerbound.com/blog/customer-proof-guide)
- Specificity: generic testimonials ("Great product") tell buyers nothing. Quantified endorsements, plus a date and a "current user" verification, increase credibility. This is practitioner guidance. — [Peerbound](https://www.peerbound.com/blog/customer-proof-guide); [Reviewflowz](https://reviewflowz.com/blog/social-proof)
- Video testimonials moved higher on the page raised conversion from 3.91% to 6.38% (IMD Business School, per SaaSHero). — [SaaSHero](https://saashero.net/content/b2b-saas-landing-page-examples/)
- Testimonials and logos placed under the CTA gave a +59% lift at Hubstaff (vendor case). — [Discovered Labs](https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact)
- Money-back guarantee **[OLDER; Quick Sprout, digital product, not SaaS, not a controlled test]**: a visible 30-day guarantee raised sales 21% with a 12% refund rate. A 7-day card-up-front trial beat it, and adding the guarantee on top of the trial added nothing. The author's earlier informal, unadvertised refunds had not reduced perceived risk. — [Quick Sprout](https://www.quicksprout.com/what-converts-better-free-trial-versus-money-back-guarantee/)
- Guarantees backfire when the language is vague, conditions are buried, or the brand lacks credibility, so they should be specific and verifiable. Track refunds and LTV, not just conversion. — [Abmatic](https://abmatic.ai/blog/how-to-use-guarantees-to-increase-conversions-on-landing-page-for-saas); [RocketShip HQ](https://www.rocketshiphq.com/?p=5710)
- ProfitWell's Patrick Campbell (podcast summary, unverified data) says brand and design can shift willingness to pay by up to 25%. — [Player.fm summary](https://ppacc.player.fm/1BQqQpA)

### Inferences
- Without big logos, the priority order is: (1) 2–4 named SMB client results with metrics (for example "booked 37% more appointments in 60 days"), with photo, business name and city; (2) one or two short video testimonials placed near the hero or first CTA; (3) a "Powered by a platform used by X businesses" line with aggregate review ratings. Check the white-label rules before naming GHL. (4) Founder or team photo with a short "who sets this up for you" block, which supports the done-for-you angle; (5) a specific guarantee such as "Set up in 7 days or your first month is free" or a 30-day money-back guarantee, stated as plain conditions.
- Data-security trust: the page needs a short "your data" block covering hosting, encryption, backups and GDPR/DPA availability. No conversion data was found for security badges specifically.
- Avoid inflated or unsourced numbers. Specificity drives credibility, and they create FTC substantiation risk.

### Gaps
- No 2023–2026 controlled study compared video and text testimonials directly.
- No data found on security/compliance badge impact for SMB SaaS.
- No primary G2, TrustRadius or Gartner report was retrieved. All review statistics above are second-hand.

## Pricing presentation psychology

### Takeaway
The best-supported pattern is three named tiers with the middle one highlighted. Show annual billing at roughly a 15–20% discount ("2 months free") with the toggle defaulting to annual. Pricing experiments most often test highlighted-plan badges and annual billing. Rigorous decoy and anchoring data from Paddle or ProfitWell was not retrievable.

### Cited Findings
- A Paddle-published article says annual discounts commonly run **15–20%**. Below that few people bother, and above 30% it reads as desperation or an inflated monthly price. The main benefit is cash up front and retention. — [ProfitWell/Paddle Learn](https://learn.profitwell.com/resources/best-discounts-for-saas-companies-with-paddle)
- ProfitWell's Campbell recommends showing discounts as absolute amounts ("save $120") rather than percentages. This comes from a podcast summary and the underlying data was not reviewed. — [Player.fm summary](https://ppacc.player.fm/1BQqQpA)
- Practitioner sources: three named tiers with the middle one "Recommended", plus an enterprise or "talk to sales" option. Four- and five-tier tables tend to underperform because of choice paralysis. This is opinion, not a controlled study. — [MayaLogic](https://www.mayalogic.com/blog/b2b-saas-pricing-pages-that-do-not-leak-revenue); [Genesys Growth](https://genesysgrowth.com/blog/designing-b2b-saas-plan-comparison-tables)
- A common annual discount is 16.7% ("2 months free"), with 20–30% used when cash flow or churn matters more. Annual-by-default toggles can reportedly shift the annual mix by 20–30% (vendor claim, unverified). — [River Editor](https://rivereditor.com/guides/how-to-design-saas-pricing-pages-2026)
- In a scraped set of 301 pricing experiments, 38% involved a "Most popular / Best value / Recommended" badge and 57% involved annual billing. The methodology could not be verified. — [Lazyweb experiments](https://experiments.lazyweb.com/research/category/saas-pricing-page-structure-benchmarks.md)
- The claim that "70–80% choose the recommended tier" has no study behind it, so disregard it. — [LeadMagic](https://leadmagic.io/gtm-skills/pricing-psychology)

### Inferences
- Recommended structure: three tiers (for example Starter, Growth highlighted, Pro/Agency), annual toggle defaulting to annual and showing "2 months free" as a dollar amount, plus a separate **done-for-you setup** add-on card. Frame the setup fee as a one-time investment next to the hours or cost it saves. Optionally waive it on annual plans, which makes a natural annual incentive.
- A "tools you replace" cost-stack calculator is a strong anchoring device for an all-in-one CRM. List typical SMB tools (CRM, email marketing, SMS, scheduling, reviews, funnels or website builder, forms, invoicing) with their published list prices, summed against the plan price. Cite the competitor prices and date-stamp them. This is an inference: no controlled study of such calculators was found.

### Gaps
- No ProfitWell or Paddle primary study on decoy pricing, tier counts or SMB anchoring was retrievable.
- No data on setup-fee framing (bundled vs separate vs waived) in SMB SaaS.
- No data on interactive cost calculators' conversion effect.

## Objection handling: FAQ, comparison tables, migration help

### Takeaway
Hard data is thin. Unbounce lists case studies and free trials among its recommendations, and its readability findings argue for keeping objection-handling content compact, in accordions. Comparison and migration content should address the specific switching costs SMBs fear.

### Cited Findings
- Unbounce SaaS recommendations include simplifying messaging, using case studies and free trials, personalising experiences, and emphasising unique value propositions. — [Unbounce SaaS benchmark](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/)
- Conversion falls as word count rises in SaaS pages. This supports collapsing FAQ answers so visible word count stays low. — [Unbounce industry page](https://unbounce.com/?p=94345)
- Guarantee terms buried in fine print undermine trust. Risk-reversal terms belong in plain view, including in the FAQ. — [Abmatic](https://abmatic.ai/blog/how-to-use-guarantees-to-increase-conversions-on-landing-page-for-saas)

### Inferences
- FAQ priorities for this offer: "Do I need to be technical?" (answer: done-for-you setup), "Can you migrate my contacts and data from X?", "What happens to my data if I cancel?", contract length and cancellation, "Is this GoHighLevel?" (prepare a white-label disclosure answer), SMS/A2P registration fees and timeline, usage-based charges (SMS, email, phone), and support hours.
- A comparison table should compare against the stack of separate tools (HubSpot + Mailchimp + Calendly + Podium etc.) rather than head-to-head with GHL itself. This avoids channel conflict and supports the all-in-one anchor.
- Migration help is a key differentiator for the done-for-you angle. Make "We move your contacts, pipelines and calendars for you" a visible benefit, not just an FAQ line.

### Gaps
- No 2023–2026 quantitative study on FAQ sections or comparison tables on SaaS landing pages was found in this research pass.

## Page performance and mobile

### Takeaway
Treat the page as mobile-first. Unbounce finds that 79% of SaaS landing page visits come from mobile, and mobile converts on par with desktop (6.4% vs 6.2%). This conflicts with older B2B site-wide data showing about 78% desktop, which reflects organic and direct B2B site traffic, not paid landing pages. Core Web Vitals improvements have measurable conversion effects in Google case studies.

### Cited Findings
- Unbounce 2024: **79% of SaaS landing page visits are mobile**, and mobile and desktop conversion are nearly equal (6.4% vs 6.2%). Unbounce recommends mobile-first pages. — [Unbounce SaaS benchmark](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/)
- Contradicting figure **[OLDER, 2022]**: Contentsquare's benchmark (46B sessions, 3,870 sites) found B2B the most desktop-heavy sector at 78% desktop. — [Mobile traffic stats summary citing Contentsquare](https://www.designrush.com/agence/search-engine-optimization/trends/mobile-traffic-statistics); [Brafton](https://www.brafton.com.au/blog/strategy/we-analyzed-181-websites-mobile-vs-desktop-benchmarks-you-need-to-know/)
- Global traffic is about 60–63% mobile (StatCounter-based, 2025). — [TechJury](https://techjury.net/industry-analysis/mobile-vs-desktop-usage/)
- Rakuten 24 (web.dev): an A/B test on Core Web Vitals optimisation gave **+33.13% conversion rate**, +53.37% revenue per visitor and −35.12% exit rate. A separate correlational analysis linked good LCP to up to +61.13% conversion. — [web.dev Rakuten 24](https://web.dev/case-studies/rakuten)
- Nuvemshop (via TechWyse, not a controlled test): good-LCP stores rose from 57% to 96%, and mobile organic conversion rose +8.9%. — [TechWyse](https://www.techwyse.com/news/reports-data/google-lcp-core-web-vitals-nuvemshop-case-study)

### Inferences
- SMB owners clicking Facebook or Instagram ads will be mostly on phones, so design the hero, form, calendar embed and pricing cards for 375px first. Use a sticky bottom CTA bar and tap-to-call where appropriate.
- Performance budget: LCP < 2.5s, INP < 200ms, CLS < 0.1 (Google's "good" thresholds). Use an optimised hero image (next/image, AVIF/WebP, priority) instead of autoplay video. Lazy-load the calendar iframe and video embeds on interaction or when near the viewport. Defer chat widgets and heatmap scripts.

### Gaps
- No 2023–2026 B2B-SaaS-specific Core Web Vitals A/B test was found. The available Google case studies are ecommerce.
- No current SMB-specific (non-enterprise) mobile vs desktop split was found.

## Accessibility and legal must-haves

### Takeaway
The legal must-haves are a privacy policy and terms, a cookie consent manager wired to Google Consent Mode v2 if EEA or UK traffic is targeted, and SMS/phone consent language on any form collecting phone numbers. Keep SMS consent as a separate, optional checkbox; carriers and GHL A2P registration expect this regardless of the vacated FCC rule. Target WCAG 2.1 AA. The European Accessibility Act has applied since 28 June 2025, though its B2B scope and microenterprise exemption are nuanced.

### Cited Findings
- TCPA: on 24 Jan 2025 the Eleventh Circuit vacated the FCC's "one-to-one" consent rule. Consent need only "clearly and unmistakably" show willingness to receive the calls or texts. — [Morrison Foerster](https://mofo.com/resources/insights/250130-eleventh-circuit-vacates-fcc-s-tcpa-one-to-one-consent-rule); [Kelley Drye](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/eleventh-circuit-vacates-tcpa-11-consent-rule)
- The FCC formally removed the one-to-one language and reinstated the prior rules (final rule around Aug–Sep 2025). Prior express **written** consent with clear disclosures is still required for marketing texts and calls using autodialers or prerecorded messages. — [Goodwin](https://www.goodwinlaw.com/en/insights/blogs/2025/09/the-fcc-issues-final-rule-formally-eliminating-the-one-to-one-consent-requirement); [Womble Bond Dickinson](https://www.womblebonddickinson.com/us/node/21214)
- Carriers and texting platforms often still require proof of one-to-one-style consent, plus privacy-policy language stating that SMS opt-in data won't be shared with third parties. — [ActiveProspect](https://activeprospect.com/blog/fcc-one-to-one-consent/)
- Revocation: reasonable opt-out requests must be honoured within 10 business days. The FCC delayed the "revoke-all" requirement to 31 Jan 2027. — [ComplianceHub](https://compliancehub.wiki/tcpa-2026-consent-revocation-one-to-one-rule-vacated-compliance/)
- Google Consent Mode v2 has been required for EEA (and UK) traffic using Google Ads, GA4 or remarketing since **6 March 2024**. It adds the `ad_user_data` and `ad_personalization` signals. A CMP must set default-denied states before tags fire. Basic mode blocks tags, while Advanced mode sends cookieless pings, which is legally contested in some EU jurisdictions. — [Enzuzo](https://www.enzuzo.com/blog/google-consent-mode-requirements-ads); [Passiro](https://passiro.com/cookie-compliance/cookie-banners/google-consent-mode/)
- EAA (Directive 2019/882) has applied since **28 June 2025** and covers non-EU sellers serving EU consumers. The technical reference is EN 301 549 / WCAG 2.1 AA. A microenterprise exemption (<10 staff and ≤€2M turnover) applies to service providers. Whether pure B2B services are in scope is disputed. The Commission says overlays and widgets cannot achieve compliance. — [AskEm EAA guide](https://askem.com/compliance/eaa/); [sota.io](https://sota.io/blog/european-accessibility-act-2019-882-saas-web-app-compliance-guide-2026); [e-include](https://e-include.eu/web-accessibility/european-accessibility-act/)

### Inferences
- Required form pattern for phone collection: an unchecked, optional checkbox that is not a condition of purchase. Example text: "I agree to receive marketing and informational text messages from Intelligent B2B at the number provided. Consent is not a condition of purchase. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. See Privacy Policy and Terms." Link both documents. Add a privacy-policy clause that SMS opt-in data and phone numbers are not shared with third parties for marketing. This also matters for the agency's own A2P 10DLC registration. Have counsel confirm.
- Footer must-haves: Privacy Policy, Terms of Service, Cookie Policy or preferences link, SMS Terms, accessibility statement, business address and contact. Use a CMP (or a cookie-banner component) that integrates Consent Mode v2, with "Reject all" as prominent as "Accept all" (privacy-preserving default).
- Accessibility basics: colour contrast ≥4.5:1, labelled form inputs (not placeholder-only), keyboard-operable accordions, pricing toggle and calendar, focus states, alt text, captions on testimonial videos, and respect for `prefers-reduced-motion`.

### Gaps
- The exact text of 47 C.F.R. § 64.1200 was not reviewed. The sources are law-firm summaries. This is not legal advice.
- State-level "mini-TCPA" laws (for example Florida and Oklahoma) were not researched.
- CTIA or carrier-specific A2P consent wording was not retrieved.

## Analytics and experimentation setup

### Takeaway
Instrument the funnel as page_view, CTA clicks, form_start, generate_lead (the only key event), calendar booking, and trial or checkout start. Pass CRM lead stages back to GA4 via the Measurement Protocol, use UTMs on all paid links, and add a free heatmap and session-replay tool. Validate redesign hypotheses with A/B tests, since most benchmark findings are correlational.

### Cited Findings
- GA4 recommended lead events: `generate_lead`, `qualify_lead`, `disqualify_lead`, `working_lead`, `close_convert_lead` and `close_unconvert_lead`. They populate the Lead acquisition report and suit B2B and offline conversions. — [Google Analytics Help](https://support.google.com/analytics/answer/9267735)
- Common practice: send later lead stages from the CRM via Measurement Protocol, mark only the confirmed lead or booking as a key event, and use `form_start` as a funnel step. When `value` is sent, include `currency`. The classification of `form_start` (Enhanced Measurement vs recommended event) differs between sources. — [Optimize Smart](https://optimizesmart.com/blog/tracking-new-qualified-and-converted-leads-in-ga4/); [Stape](https://stape.io/news/ga4-new-recommended-events-lead-generation); [Leadgen Economy](https://www.leadgen-economy.com/blog/ga4-lead-generation-tracking-guide/)
- Unbounce notes its benchmark findings are correlational and recommends validating them with A/B tests. — [Unbounce methodology](https://unbounce.com/conversion-benchmark-report/methodology/)
- Booked-meeting rates can overstate gains if no-shows rise. Measure form → booked → held → opportunity. — (analysis drawn from the Chili Piper case-study review) [Chili Piper Workato](https://www.chilipiper.com/customers/workato)

### Inferences
- Event plan: `cta_click` (with location param: hero, pricing, sticky, footer), `pricing_toggle` (monthly/annual), `plan_select`, `calculator_interact`, `video_play` and `video_complete`, `faq_open`, `form_start`, `form_step_2`, `generate_lead` (key event), `book_call` (key event if the calendar is the main path), and `trial_start` or `begin_checkout`. Pipe GHL opportunity stages back as `qualify_lead` and `close_convert_lead`.
- Use a UTM convention across ads and email (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content` per creative). Capture UTMs in hidden form fields so they land in the CRM.
- Microsoft Clarity (free) or Hotjar for heatmaps and session replay, loaded only after consent and deferred for performance.
- A/B priorities by expected impact: (1) card vs no-card trial (or trial vs "book setup call" primary CTA), (2) hero headline readability variants, (3) a testimonial video high on the page, (4) annual-default pricing toggle, (5) a sticky mobile CTA. At a 3–4% baseline, detecting a 20% relative lift needs on the order of 10k+ visitors per variant. Low-traffic pages should test bold changes only.

### Gaps
- No specific source was retrieved on Microsoft Clarity or Hotjar effect sizes. Their recommendation is based on standard practice.
- The sample-size estimate is a standard statistical approximation, not taken from a cited source.

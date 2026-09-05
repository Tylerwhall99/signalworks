# A2P Texting Registration — The 5-Minute Version

> Knocks out the "understand A2P flow" task. Sources: GHL help center
> (help.gohighlevel.com A2P articles), ghlstack.com registration guide,
> a2pgenius.com agency guide — checked Sept 2026.

## What it is, in one line

US carriers require every business texting from a regular 10-digit
number to register WHO is texting (the "brand") and WHY (the
"campaign") — unregistered texts get silently blocked. This gates both
Lead Capture (missed-call text-back) and Reputation Engine (review
requests).

## How it works in GHL

Everything runs through **Trust Center** inside the sub-account: a
guided flow for Business Profile → Brand → Campaign → consent evidence.
One brand + campaign per client sub-account.

## The facts that matter

- **Cost:** ~$4 one-time brand fee + ~$2/month per campaign, plus
  ~$0.008–0.01 per SMS segment. Trivial — build it into the service
  price (already covered at $297/$197).
- **Timeline:** days to a few weeks per client — varies with carrier
  review. **This is why registration starts at kickoff, never at
  launch** (catalog rule A6). Put it in the client onboarding checklist
  as step one.
- **EIN matters:** businesses with an EIN register as a standard brand
  (better throughput). A sole-prop path exists for clients without an
  EIN but is more limited. Ask for the client's EIN at intake for these
  services.
- **DBA wrinkle (relevant to us):** a company with an EIN operating
  under a different brand name (hello, Signalworks under Long Hall
  Financial) includes "We are doing DBA as [name]" in the campaign
  description, and the website/privacy policy must show both names
  consistently. Flag this when registering the Signalworks line itself.

## Top rejection causes (all avoidable at build time)

1. Pre-checked consent checkboxes (ours is unchecked — good).
2. Privacy policy missing, hidden, or mentioning lead selling/buying.
3. Campaign description not matching what the business actually does.
4. Opt-in language not distinguishing marketing vs. transactional texts.

Our free builds already ship the compliant skeleton: visible privacy
policy, unchecked SMS consent with STOP language. For Lead
Capture/Reputation clients, mirror that consent language into their
site's forms during the build.

## The operating rule

**Every Lead Capture or Reputation sale → A2P registration submitted the
same day the agreement is signed.** The service "starts" when texting
clears, and the client knows that upfront: "texting goes live once the
carriers approve your registration — usually days, occasionally a couple
of weeks; everything else starts now."

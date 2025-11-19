import Link from 'next/link';

export const metadata = {
  title: 'Sherlock Gift Investigation – Proof of Consent | Rizzer',
  description: 'Documentation of user consent procedures for Sherlock Gift Investigation feature - Twilio toll-free verification compliance.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SherlockConsentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-800 text-white py-6">
        <div className="container-custom">
          <Link href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            ← Back to Rizzer
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-16 max-w-4xl">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Sherlock Gift Investigation – Proof of Consent
          </h1>
          <p className="text-lg text-gray-600">
            This document outlines the consent procedures for the Sherlock Gift Investigation feature, demonstrating compliance with Twilio's toll-free verification requirements and applicable messaging regulations.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sherlock Gift Investigation is a one-time, user-initiated feature inside the Rizzer app. A Rizzer user ("the gift-giver") voluntarily chooses to start a gift investigation to help them pick a thoughtful and personalized gift for someone they know ("the recipient").
              </p>
              <p>
                This page describes the opt-in process and how recipients consent to receive messages through our toll-free number.
              </p>
            </div>
          </section>

          {/* Section 2: How the Gift-Giver Initiates the Feature */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">How the Gift-Giver Triggers the Feature</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The feature can only begin inside the Rizzer app.
              </p>
              <p>
                The gift-giver must manually:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open the "Sherlock Gift Investigation" feature.</li>
                <li>Enter the recipient's phone number.</li>
                <li>Review and approve the exact message that will be sent.</li>
                <li>Confirm the initiation of the outreach.</li>
              </ul>
              <p>
                <strong>No messages are ever sent automatically.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No background automation.</li>
                <li>No recurring subscriptions.</li>
                <li>All outreach is fully user-triggered.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Initial Message Shown to Recipients */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">What the Recipient Sees (Initial Message)</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The first message the recipient receives always includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full brand identification ("Sherlock from Rizzer")</li>
                <li>The purpose of the message ("helping a friend choose a thoughtful gift")</li>
                <li>Clear STOP/HELP instructions</li>
                <li>No marketing language</li>
                <li>No hidden identities</li>
                <li>No links unless required</li>
              </ul>
              <p>
                <strong>Example:</strong>
              </p>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                <p className="italic">
                  "Hi! This is Sherlock from Rizzer 👋 A friend wants to surprise you with a thoughtful gift, but they want to make sure it fits what you're into lately. Can I ask you a few quick questions? Reply STOP to end. Msg&amp;Data rates may apply."
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: How Recipients Provide Consent */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">How Recipients Provide Consent</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By replying to the message, the recipient gives express consent to continue the conversation.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replies are completely optional.</li>
                <li>Recipients may answer questions freely.</li>
                <li>They may ask questions about the purpose of the conversation.</li>
                <li>They may stop the conversation at any time by replying STOP, which immediately ends messaging.</li>
                <li>A STOP request is applied globally and blocks all future messaging to that number.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Nature of Messages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Nature of the Messages</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>Conversations are short, typically 3–6 messages.</li>
                <li>No promotional offers are ever sent.</li>
                <li>No recurring messages or automated campaigns exist.</li>
                <li>No marketing or advertising content is used.</li>
                <li>The assistant only asks simple questions about the recipient's interests to help the gift-giver choose a gift.</li>
                <li>The number is not used for anything outside this feature.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Data Usage & Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">User Privacy &amp; Data Handling</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We never sell, share, or repurpose data collected in this process.
              </p>
              <p>
                All information is used solely to help the gift-giver select a gift.
              </p>
              <p>
                <strong>Full privacy policy and terms:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Compliance Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Compliance</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sherlock Gift Investigation follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>CTIA Messaging Principles</li>
                <li>A2P / Toll-Free Messaging rules</li>
                <li>Clear opt-in, clear opt-out requirements</li>
                <li>Required STOP/HELP language</li>
                <li>Full brand transparency</li>
              </ul>
              <p>
                <strong>All conversations are voluntary, user-initiated, non-recurring, and fully compliant.</strong>
              </p>
            </div>
          </section>

          {/* Section 8: Links to Privacy Policy & Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Links to Privacy Policy &amp; Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="mb-4">
                For complete details on how we handle user data and messaging, please refer to our official policies:
              </p>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/privacy" 
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms" 
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="/cookies" 
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Footer Section */}
          <section className="border-t pt-8 mt-12">
            <p className="text-gray-600 text-center">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
              <strong>Document Version:</strong> 1.0
            </p>
            <p className="text-gray-600 text-center mt-4">
              © {new Date().getFullYear()} Rizzer. All rights reserved.
            </p>
            <p className="text-center mt-4">
              <strong>Questions?</strong> Contact us at{' '}
              <a 
                href="mailto:legal@rizzer.io" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                legal@rizzer.io
              </a>
            </p>
          </section>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container-custom text-center">
          <p className="text-gray-400" suppressHydrationWarning>
            © {new Date().getFullYear()} Rizzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

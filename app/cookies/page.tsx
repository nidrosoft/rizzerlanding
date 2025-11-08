import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy - Rizzer',
  description: 'Cookie Policy for Rizzer - Your AI Dating Coach',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-rizzer-pink to-rizzer-salmon text-white py-6">
        <div className="container-custom">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            ← Back to Rizzer
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 7, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website or use our mobile application. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rizzer uses cookies and similar tracking technologies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for the App to function properly, including authentication and security</li>
              <li><strong>Performance Cookies:</strong> Help us understand how users interact with the App to improve functionality</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Collect information about how you use the App to help us improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Session Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These are temporary cookies that expire when you close your browser or app. They help us maintain your session and ensure security during your visit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Persistent Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and provide a personalized experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">First-Party Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These are set directly by Rizzer and are used to provide core functionality and improve your experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Third-Party Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These are set by our trusted partners for analytics, advertising, and other services. We carefully select our partners to ensure they meet our privacy standards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Specific Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">session_id</td>
                    <td className="border border-gray-300 px-4 py-2">Maintains your login session</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">user_preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Stores your app preferences</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">analytics_id</td>
                    <td className="border border-gray-300 px-4 py-2">Tracks usage patterns for improvement</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">security_token</td>
                    <td className="border border-gray-300 px-4 py-2">Protects against security threats</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services that may set cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> To understand how users interact with our App</li>
              <li><strong>Firebase:</strong> For authentication and app performance monitoring</li>
              <li><strong>Stripe:</strong> For secure payment processing</li>
              <li><strong>Mixpanel:</strong> For user behavior analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to accept or reject cookies. You can manage your cookie preferences through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
              <li><strong>App Settings:</strong> You can manage cookie preferences within the Rizzer app settings</li>
              <li><strong>Opt-Out Tools:</strong> Use third-party opt-out tools for analytics cookies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please note that disabling certain cookies may affect the functionality of the App and your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Mobile Device Identifiers</h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to cookies, our mobile app may use device identifiers (such as Apple's IDFA or Google's Advertising ID) for similar purposes. You can reset or limit the use of these identifiers through your device settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Do Not Track Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we are committed to respecting your privacy choices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Email: privacy@rizzer.app<br />
              Address: [Your Business Address]
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Your Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              By using Rizzer, you consent to our use of cookies as described in this Cookie Policy. If you do not agree with our use of cookies, you should adjust your browser settings or discontinue use of the App.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            © 2025 Rizzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

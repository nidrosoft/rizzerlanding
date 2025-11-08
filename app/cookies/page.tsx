import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Rizzer',
  description: 'Cookie Policy for Rizzer - Learn how we use cookies and tracking technologies.',
};

export default function CookiePolicyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy for Rizzer</h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> January 7, 2025<br />
          <strong>Last Updated:</strong> November 7, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Introduction</h2>
            <p className="text-gray-800 leading-relaxed">
              This Cookie Policy explains how Rizzer uses cookies and similar tracking technologies in our mobile application. This policy should be read together with our Privacy Policy and Terms of Service.
            </p>
            <p className="text-gray-800 leading-relaxed mt-4 font-semibold">
              By using Rizzer, you consent to our use of cookies and tracking technologies as described in this policy.
            </p>
          </section>

          {/* 1. What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies and Tracking Technologies</h2>
            
            <h3 className="text-xl font-semibold mb-3">1.1 Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files stored on your device that help websites and apps remember information about your visit. While traditional web cookies are used in browsers, mobile apps use similar technologies.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Mobile App Tracking Technologies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In mobile applications, we use technologies similar to cookies:
            </p>

            <h4 className="text-lg font-semibold mb-2">Local Storage:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Data stored directly on your device</li>
              <li>Persists between app sessions</li>
              <li>Used for preferences and settings</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Device Identifiers:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>IDFA (iOS): Identifier for Advertisers</li>
              <li>AAID (Android): Android Advertising ID</li>
              <li>Device ID: Unique device identifier</li>
              <li>Used for analytics and attribution</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">SDKs (Software Development Kits):</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Third-party code integrated into the app</li>
              <li>Collect data for specific purposes</li>
              <li>Examples: Analytics, crash reporting, authentication</li>
            </ul>
          </section>

          {/* 2. Types of Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Types of Tracking Technologies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Strictly Necessary</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Purpose:</strong> Essential for the App to function properly
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What We Use:</strong> Authentication Tokens, Session Management, Security Tokens, Load Balancing
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Duration:</strong> Session or persistent (up to 1 year)<br />
              <strong>Can You Disable:</strong> No - these are required for the App to work
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Functional</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Purpose:</strong> Remember your preferences and settings
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What We Use:</strong> User Preferences (language, notifications, theme), App Settings, Form Data, Recently Viewed
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Duration:</strong> Persistent (up to 2 years)<br />
              <strong>Can You Disable:</strong> Yes - but may affect functionality
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Analytics and Performance</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Purpose:</strong> Understand how you use the App and improve performance
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What We Use:</strong> Usage Analytics, Performance Monitoring, Crash Reporting, A/B Testing
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Data Collected:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Pages/screens viewed</li>
              <li>Features used</li>
              <li>Time spent in app</li>
              <li>Device information</li>
              <li>App version</li>
              <li>Error logs</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Duration:</strong> Persistent (up to 2 years)<br />
              <strong>Can You Disable:</strong> Yes - through app settings
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Advertising and Marketing</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Purpose:</strong> Deliver relevant ads and measure campaign effectiveness
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What We Use:</strong> Ad Tracking, Attribution, Retargeting, Conversion Tracking
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Duration:</strong> Persistent (up to 1 year)<br />
              <strong>Can You Disable:</strong> Yes - through device settings (Limit Ad Tracking)
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              Note: We do not sell your personal information to advertisers.
            </p>
          </section>

          {/* 3. Specific Technologies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Specific Technologies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 Authentication and Security</h3>
            
            <h4 className="text-lg font-semibold mb-2">Supabase Auth:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Purpose:</strong> User authentication and session management</li>
              <li><strong>Data Collected:</strong> User ID, session tokens, login timestamps</li>
              <li><strong>Duration:</strong> Session (until logout) or 30 days</li>
              <li><strong>Privacy:</strong> Encrypted and secure</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">JWT Tokens:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Purpose:</strong> Secure API authentication</li>
              <li><strong>Data Collected:</strong> User ID, permissions, expiration</li>
              <li><strong>Duration:</strong> 1 hour (refresh tokens: 30 days)</li>
              <li><strong>Privacy:</strong> Signed and encrypted</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Third-Party SDKs</h3>
            
            <h4 className="text-lg font-semibold mb-2">Expo Framework:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Purpose:</strong> App development platform</li>
              <li><strong>Data Collected:</strong> Device info, app version, crash logs</li>
              <li><strong>Privacy Policy:</strong> expo.dev/privacy</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Supabase:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Purpose:</strong> Backend database and authentication</li>
              <li><strong>Data Collected:</strong> User data, app data (as described in Privacy Policy)</li>
              <li><strong>Privacy Policy:</strong> supabase.com/privacy</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">OpenRouter/Grok AI:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Purpose:</strong> AI conversation generation</li>
              <li><strong>Data Collected:</strong> Messages sent to AI (not permanently stored)</li>
              <li><strong>Privacy Policy:</strong> openrouter.ai/privacy</li>
            </ul>
          </section>

          {/* 5. Your Choices and Control */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Choices and Control</h2>
            
            <h3 className="text-xl font-semibold mb-3">5.1 Device-Level Controls</h3>
            
            <h4 className="text-lg font-semibold mb-2">iOS:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Limit Ad Tracking:</strong> Settings → Privacy → Tracking → Allow Apps to Request to Track (OFF)</li>
              <li><strong>Reset Advertising ID:</strong> Settings → Privacy → Apple Advertising → Reset Advertising Identifier</li>
              <li><strong>Location Services:</strong> Settings → Privacy → Location Services → Rizzer</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Android:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Opt Out of Ads:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
              <li><strong>Reset Advertising ID:</strong> Settings → Google → Ads → Reset advertising ID</li>
              <li><strong>Location Services:</strong> Settings → Location → App permissions → Rizzer</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 In-App Controls</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Analytics:</strong> Settings → Privacy → Analytics → Disable Usage Analytics</li>
              <li><strong>Notifications:</strong> Settings → Notifications → Customize notification preferences</li>
              <li><strong>Location:</strong> Settings → Privacy → Location → Choose your preferred level</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 Retention Periods</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Strictly Necessary:</strong> Session cookies until logout; Auth tokens 30 days; Security tokens 1 year</li>
              <li><strong>Functional:</strong> Preference cookies 2 years or until changed</li>
              <li><strong>Analytics:</strong> Usage data 2 years; Crash reports 90 days</li>
              <li><strong>Advertising:</strong> Ad tracking data 1 year; Attribution data 90 days</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-2">When you delete your account:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>All cookies and local storage are cleared</li>
              <li>Device identifiers are disassociated</li>
              <li>Analytics data is anonymized</li>
              <li>Backups are removed within 90 days</li>
            </ul>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            
            <h3 className="text-xl font-semibold mb-3">9.1 Age Restriction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rizzer is not intended for users under 18. We do not knowingly collect data from children, set cookies on children's devices, track children's usage, or target children with ads.
            </p>

            <h3 className="text-xl font-semibold mb-3">9.2 Parental Notice</h3>
            <p className="text-gray-700 leading-relaxed">
              If you believe a child has used Rizzer, contact us immediately at <strong>privacy@rizzer.app</strong>. We will delete all data and cookies, and the account will be permanently closed.
            </p>
          </section>

          {/* 12. California Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. California Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3">12.1 CCPA Compliance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              California residents have rights regarding tracking:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Do Not Sell:</strong> We do not sell your personal information (including tracking data)</li>
              <li><strong>Right to Know:</strong> What tracking technologies we use and how data is used</li>
              <li><strong>Right to Delete:</strong> Request deletion of tracking data and clear cookies</li>
            </ul>
          </section>

          {/* 13. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            
            <h3 className="text-xl font-semibold mb-3">13.1 Questions About Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> privacy@rizzer.app<br />
              <strong>Subject:</strong> Cookie Policy Inquiry<br />
              <strong>Response Time:</strong> Within 7 business days
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">13.2 Data Rights Requests</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> privacy@rizzer.app<br />
              <strong>Subject:</strong> Data Rights Request<br />
              <strong>Include:</strong> Your name, email, and specific request<br />
              <strong>Response Time:</strong> Within 30 days
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">13.3 Technical Support</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> support@rizzer.app<br />
              <strong>In-App:</strong> Settings → Help → Contact Support
            </p>
          </section>

          {/* 14. Glossary */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Glossary</h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">Common Terms:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Cookie:</strong> Small text file stored on your device</li>
              <li><strong>Session Cookie:</strong> Temporary cookie deleted when you close the app</li>
              <li><strong>Persistent Cookie:</strong> Cookie that remains until expiration or deletion</li>
              <li><strong>Device Identifier:</strong> Unique ID for your device</li>
              <li><strong>SDK:</strong> Software Development Kit - third-party code in the app</li>
              <li><strong>IDFA:</strong> Identifier for Advertisers (iOS)</li>
              <li><strong>AAID:</strong> Android Advertising ID</li>
              <li><strong>Local Storage:</strong> Data stored on your device</li>
            </ul>
          </section>

          {/* 20. Acknowledgment */}
          <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-green-900">20. Acknowledgment</h2>
            <p className="text-gray-800 leading-relaxed mb-4 font-semibold">
              By using Rizzer, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>You have read and understood this Cookie Policy</li>
              <li>You consent to our use of cookies and tracking technologies</li>
              <li>You understand your choices and controls</li>
              <li>You can withdraw consent at any time</li>
              <li>You have reviewed related policies (Privacy Policy, Terms of Service)</li>
            </ul>
          </section>

          {/* Footer */}
          <section className="border-t pt-8 mt-12">
            <p className="text-gray-600 text-center">
              <strong>Effective Date:</strong> January 7, 2025<br />
              <strong>Last Updated:</strong> November 7, 2025<br />
              <strong>Version:</strong> 1.0
            </p>
            <p className="text-gray-600 text-center mt-4">
              © 2025 Rizzer. All rights reserved.
            </p>
            <p className="text-center mt-4">
              <Link href="/privacy" className="text-rizzer-pink hover:text-rizzer-salmon underline font-semibold mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-rizzer-pink hover:text-rizzer-salmon underline font-semibold">
                Terms of Service
              </Link>
            </p>
            <p className="text-center mt-4 font-semibold">
              Questions? Contact us at <a href="mailto:privacy@rizzer.app" className="text-rizzer-pink hover:text-rizzer-salmon underline">privacy@rizzer.app</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
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

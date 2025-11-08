import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Rizzer',
  description: 'Terms of Service for Rizzer - Your AI Dating Coach',
};

export default function TermsOfServicePage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> January 7, 2025<br />
          <strong>Last Updated:</strong> November 7, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using Rizzer ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App. We reserve the right to modify these Terms at any time, and your continued use of the App constitutes acceptance of any changes.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Rizzer is an AI-powered dating coach application that provides personalized conversation starters, date ideas, gift recommendations, and relationship advice. The App uses artificial intelligence to analyze your inputs and provide customized suggestions to enhance your dating experience.
            </p>
          </section>

          {/* 3. User Eligibility */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use Rizzer, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into these Terms</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not be prohibited from using the App under applicable laws</li>
            </ul>
          </section>

          {/* 4. Account Registration */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account with Rizzer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must provide accurate, current, and complete information</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            </ul>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree NOT to use Rizzer to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate any person or entity</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Collect or store personal data about other users</li>
              <li>Interfere with or disrupt the App or servers</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Engage in any form of automated use of the system</li>
            </ul>
          </section>

          {/* 6. AI-Generated Content */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. AI-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rizzer uses artificial intelligence to generate suggestions and content:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>AI-generated content is provided for informational purposes only</li>
              <li>We do not guarantee the accuracy, completeness, or suitability of AI suggestions</li>
              <li>You are solely responsible for how you use AI-generated content</li>
              <li>Always review and edit AI suggestions before using them</li>
              <li>We are not liable for any consequences of using AI-generated content</li>
            </ul>
          </section>

          {/* 7. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Our Content:</strong> The App and its original content, features, and functionality are owned by Rizzer and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain ownership of any content you submit to the App. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content solely for the purpose of providing the App services.
            </p>
          </section>

          {/* 8. Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of the App is also governed by our <Link href="/privacy" className="text-rizzer-pink hover:text-rizzer-salmon underline">Privacy Policy</Link>. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* 9. Subscription and Payments */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Subscription and Payments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rizzer offers both free and premium subscription tiers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Free Tier:</strong> Access to basic features with limitations</li>
              <li><strong>Premium Tier:</strong> Full access to all features for a monthly or annual fee</li>
              <li>Subscription fees are billed in advance on a recurring basis</li>
              <li>You can cancel your subscription at any time through your account settings</li>
              <li>Refunds are provided in accordance with applicable app store policies</li>
              <li>We reserve the right to change subscription prices with 30 days notice</li>
            </ul>
          </section>

          {/* 10. Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Breach of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Violation of our Acceptable Use policy</li>
              <li>At our sole discretion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use the App will immediately cease. You may delete your account at any time through the App settings.
            </p>
          </section>

          {/* 11. Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the App will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of AI-generated content</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Rizzer is a tool to assist with dating communication. We do not guarantee any specific dating outcomes or relationship success.
            </p>
          </section>

          {/* 12. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIZZER SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Damages resulting from your use or inability to use the App</li>
              <li>Damages resulting from AI-generated content or suggestions</li>
              <li>Any damages arising from relationships or interactions facilitated by the App</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our total liability shall not exceed the amount you paid to us in the 12 months preceding the claim, or $100, whichever is greater.
            </p>
          </section>

          {/* 13. Indemnification */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Rizzer, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the App, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          {/* 14. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be resolved in the courts located in San Diego County, California.
            </p>
          </section>

          {/* 15. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email or in-app notification. Your continued use of the App after changes are posted constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically.
            </p>
          </section>

          {/* 16. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Email:</strong> legal@rizzer.app<br />
              <strong>Support:</strong> support@rizzer.app<br />
              <strong>In-App:</strong> Settings → Help → Contact Support
            </p>
          </section>

          {/* Footer */}
          <section className="border-t pt-8 mt-12">
            <p className="text-gray-600 text-center">
              <strong>Last Updated:</strong> November 7, 2025<br />
              <strong>Version:</strong> 1.0
            </p>
            <p className="text-gray-600 text-center mt-4">
              © 2025 Rizzer. All rights reserved.
            </p>
            <p className="text-center mt-4">
              <Link href="/privacy" className="text-rizzer-pink hover:text-rizzer-salmon underline font-semibold">
                View Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rizzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Rizzer',
  description: 'Privacy Policy for Rizzer - Your AI Dating Coach. Learn how we protect your data and privacy.',
};

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy for Rizzer</h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> January 7, 2025<br />
          <strong>Last Updated:</strong> November 7, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Rizzer ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience using our AI-powered dating coach application ("App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>By using Rizzer, you agree to the collection and use of information in accordance with this Privacy Policy.</strong>
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">1.1 Personal Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account and use Rizzer, we collect the following information:
            </p>

            <h4 className="text-lg font-semibold mb-2">Account Information:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Phone Number</strong> (required for authentication)</li>
              <li><strong>Email Address</strong> (optional)</li>
              <li><strong>Full Name</strong></li>
              <li><strong>Date of Birth</strong> (to verify you are 18+)</li>
              <li><strong>Gender Identity</strong></li>
              <li><strong>Location</strong> (city, state)</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Profile Information:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Photos</strong> (up to 6 profile photos)</li>
              <li><strong>Bio/Description</strong></li>
              <li><strong>Height</strong> (optional)</li>
              <li><strong>Zodiac Sign</strong></li>
              <li><strong>Interests and Hobbies</strong></li>
              <li><strong>Relationship Goals</strong></li>
              <li><strong>Looking For</strong> (relationship preferences)</li>
              <li><strong>Occupation</strong> (optional)</li>
              <li><strong>Drinking Preferences</strong> (optional)</li>
              <li><strong>Religion</strong> (optional)</li>
              <li><strong>Ethnicity</strong> (optional)</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Dating Activity:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Date Profiles</strong> (information about people you're dating)</li>
              <li><strong>Conversation Notes</strong></li>
              <li><strong>Date History and Memories</strong></li>
              <li><strong>Gift Investigation Data</strong></li>
              <li><strong>AI Chat Conversations</strong> (with our Genius Rizz Coach)</li>
              <li><strong>Saved Rizz Lines</strong> (conversation starters you save)</li>
              <li><strong>Event RSVPs and Interests</strong></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Information Collected Automatically</h3>
            <h4 className="text-lg font-semibold mb-2">Device Information:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Device type and model</li>
              <li>Operating system and version</li>
              <li>Unique device identifiers</li>
              <li>Mobile network information</li>
              <li>IP address</li>
              <li>App version</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Usage Data:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Features you use</li>
              <li>Time spent in app</li>
              <li>Screens viewed</li>
              <li>Buttons clicked</li>
              <li>Search queries</li>
              <li>AI interactions</li>
              <li>Error logs and crash reports</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 To Provide and Improve Our Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Account Management:</strong> Create and manage your account</li>
              <li><strong>AI Features:</strong> Generate personalized conversation starters, date ideas, and gift suggestions</li>
              <li><strong>Date Management:</strong> Help you organize and track your dating connections</li>
              <li><strong>Personalization:</strong> Customize content and recommendations based on your preferences</li>
              <li><strong>Communication:</strong> Send you app notifications, updates, and important information</li>
              <li><strong>Customer Support:</strong> Respond to your questions and provide assistance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 To Ensure Safety and Security</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Fraud Prevention:</strong> Detect and prevent fraudulent activity</li>
              <li><strong>Terms Enforcement:</strong> Enforce our Terms of Service</li>
              <li><strong>Safety Measures:</strong> Protect against harassment, abuse, and inappropriate content</li>
              <li><strong>Age Verification:</strong> Ensure all users are 18 years or older</li>
              <li><strong>Account Security:</strong> Protect your account from unauthorized access</li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 We DO NOT Sell Your Personal Information</h3>
            <p className="text-gray-700 leading-relaxed font-semibold">
              We will never sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share information with trusted third-party service providers who help us operate our app:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Supabase</strong> (database and authentication) - stores your account and profile data</li>
              <li><strong>OpenRouter/Grok AI</strong> (conversation generation) - processes your AI chat messages</li>
              <li><strong>Cloud Storage</strong> (photo hosting) - stores your profile photos securely</li>
              <li><strong>Analytics Tools</strong> - help us understand app performance (anonymized data)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed italic">
              All service providers are contractually obligated to protect your data and use it only for specified purposes.
            </p>
          </section>

          {/* 4. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Active Accounts</h3>
            <p className="text-gray-700 leading-relaxed">
              We retain your information for as long as your account is active and as needed to provide services.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Account Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-2">When you delete your account:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Immediate:</strong> Your profile becomes inaccessible to other users</li>
              <li><strong>30 Days:</strong> Your personal data is permanently deleted from our active databases</li>
              <li><strong>90 Days:</strong> Backup copies are removed from our systems</li>
              <li><strong>Exceptions:</strong> We may retain certain data longer if required by law or for legitimate business purposes</li>
            </ul>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            
            <h3 className="text-xl font-semibold mb-3">5.1 Security Measures</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
              <li><strong>Secure Authentication:</strong> Phone verification and secure session management</li>
              <li><strong>Access Controls:</strong> Role-based access to data within our systems</li>
              <li><strong>Regular Security Audits:</strong> Ongoing monitoring and vulnerability assessments</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Your Responsibility</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Use a strong, unique password</li>
              <li>Keep your login credentials confidential</li>
              <li>Enable two-factor authentication (when available)</li>
              <li>Report suspicious activity immediately</li>
              <li>Log out from shared devices</li>
            </ul>
          </section>

          {/* 6. Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3">6.1 Access and Portability</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Timeline:</strong> We will respond within 30 days</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Deletion</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Account Deletion:</strong> Delete your account and data through app settings</li>
              <li><strong>Specific Data:</strong> Request deletion of specific information</li>
              <li><strong>Exceptions:</strong> Some data may be retained for legal or security reasons</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.3 California Privacy Rights (CCPA)</h3>
            <p className="text-gray-700 leading-relaxed mb-2">California residents have additional rights:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Right to Know:</strong> What personal information we collect and how we use it</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of sale of personal information (we don't sell data)</li>
              <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.4 How to Exercise Your Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> privacy@rizzer.app<br />
              <strong>In-App:</strong> Settings → Privacy → Data Rights<br />
              <strong>Response Time:</strong> Within 30 days of verified request
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 Age Requirement</h3>
            <p className="text-gray-700 leading-relaxed">
              Rizzer is <strong>NOT</strong> intended for users under 18 years of age. We do not knowingly collect personal information from anyone under 18.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Parental Notice</h3>
            <p className="text-gray-700 leading-relaxed">
              If you believe your child under 18 has provided information to Rizzer, contact us immediately at <strong>privacy@rizzer.app</strong>. We will promptly delete the account and all associated data.
            </p>
          </section>

          {/* 8. AI and Automated Decision-Making */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. AI and Automated Decision-Making</h2>
            
            <h3 className="text-xl font-semibold mb-3">8.1 AI Features</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Rizzer uses artificial intelligence to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Generate conversation starters</li>
              <li>Suggest date ideas</li>
              <li>Provide dating advice</li>
              <li>Analyze screenshots for context</li>
              <li>Recommend gifts</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Your Control</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Opt-Out:</strong> You can choose not to use AI features</li>
              <li><strong>Feedback:</strong> Provide feedback to improve AI accuracy</li>
              <li><strong>Manual Override:</strong> Always review and edit AI suggestions before using</li>
            </ul>
            <p className="text-gray-700 leading-relaxed italic mt-4">
              Note: AI providers process data in real-time but do not permanently store your conversations.
            </p>
          </section>

          {/* 9. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy to reflect changes in our practices, new features, or legal requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Material Changes:</strong> We will notify you via email or in-app notification<br />
              <strong>Minor Changes:</strong> Updated policy posted with new "Last Updated" date<br />
              <strong>Review Period:</strong> 30 days to review before changes take effect
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of Rizzer after changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> privacy@rizzer.app<br />
              <strong>In-App:</strong> Settings → Help → Contact Support
            </p>
            <p className="text-gray-700 leading-relaxed mt-6">
              <strong>Response Time:</strong><br />
              Simple Questions: 7 business days<br />
              Data Rights Requests: 30 days<br />
              Urgent Security Issues: 24 hours
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
              <strong>Questions? Contact us at privacy@rizzer.app</strong>
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

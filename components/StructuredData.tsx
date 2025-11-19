export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://rizzer.io/#website",
        "url": "https://rizzer.io",
        "name": "Rizzer",
        "description": "Your AI Dating Coach - Master Modern Dating with Confidence",
        "publisher": {
          "@id": "https://rizzer.io/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://rizzer.io/#organization",
        "name": "Rizzer",
        "url": "https://rizzer.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rizzer.io/icon-512.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/rizzerapp",
          "https://instagram.com/rizzerapp"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://rizzer.io/#webpage",
        "url": "https://rizzer.io",
        "name": "Rizzer - Your AI Dating Coach | Master Modern Dating with Confidence",
        "isPartOf": {
          "@id": "https://rizzer.io/#website"
        },
        "about": {
          "@id": "https://rizzer.io/#organization"
        },
        "description": "Rizzer combines AI intelligence with dating psychology to give you personalized conversation starters, date ideas, and relationship insights that actually work.",
        "inLanguage": "en-US"
      },
      {
        "@type": "MobileApplication",
        "name": "Rizzer",
        "operatingSystem": ["iOS", "Android"],
        "applicationCategory": "LifestyleApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "10000",
          "bestRating": "5"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Your AI-powered dating coach that helps you spark conversations, plan perfect dates, and build meaningful connections."
      },
      {
        "@type": "SoftwareApplication",
        "name": "Rizzer",
        "applicationCategory": "Lifestyle",
        "operatingSystem": ["iOS", "Android"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "10000"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Rizzer free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rizzer offers a free tier with basic features including conversation starters and date ideas. Premium features like unlimited AI coaching, gift investigations, and advanced date profiles are available with Rizzer Pro starting at $9.99/month."
            }
          },
          {
            "@type": "Question",
            "name": "How does the AI work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rizzer uses advanced AI trained on dating psychology and successful conversation patterns. It analyzes context, interests, and relationship dynamics to provide personalized suggestions that feel natural and authentic."
            }
          },
          {
            "@type": "Question",
            "name": "Is my data private and secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Your conversations, date profiles, and personal information are encrypted and never shared. We take privacy seriously and comply with all data protection regulations."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

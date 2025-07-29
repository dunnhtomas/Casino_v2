#!/bin/sh
echo "=== Fixing all FAQAccordion errors in container ==="

# Contact page - add IDs
sed -i 's/{ question: "How do you choose/{ id: "how-choose-casinos", question: "How do you choose/' src/app/contact/page.tsx
sed -i 's/{ question: "Do you accept/{ id: "payments-for-reviews", question: "Do you accept/' src/app/contact/page.tsx  
sed -i 's/{ question: "How often/{ id: "update-frequency", question: "How often/' src/app/contact/page.tsx
sed -i 's/{ question: "Can I request/{ id: "request-review", question: "Can I request/' src/app/contact/page.tsx
sed -i 's/{ question: "How do I report/{ id: "report-incorrect", question: "How do I report/' src/app/contact/page.tsx

# Privacy page - add IDs  
sed -i 's/{ question: "What personal/{ id: "personal-data-collected", question: "What personal/' src/app/privacy/page.tsx
sed -i 's/{ question: "How do you use/{ id: "how-data-used", question: "How do you use/' src/app/privacy/page.tsx
sed -i 's/{ question: "Do you share/{ id: "data-sharing", question: "Do you share/' src/app/privacy/page.tsx
sed -i 's/{ question: "How long/{ id: "data-retention", question: "How long/' src/app/privacy/page.tsx
sed -i 's/{ question: "What are my rights/{ id: "user-rights", question: "What are my rights/' src/app/privacy/page.tsx

# Games slug page - add IDs and fix prop
sed -i 's/{ question: "What makes/{ id: "game-special", question: "What makes/' src/app/games/[slug]/page.tsx
sed -i 's/{ question: "Is this game/{ id: "game-fairness", question: "Is this game/' src/app/games/[slug]/page.tsx
sed -i 's/{ question: "What are the betting/{ id: "betting-limits", question: "What are the betting/' src/app/games/[slug]/page.tsx
sed -i 's/{ question: "Can I play/{ id: "play-for-free", question: "Can I play/' src/app/games/[slug]/page.tsx
sed -i 's/faqs={faqs}/items={faqs}/' src/app/games/[slug]/page.tsx

# Guides slug page - add IDs and fix prop
sed -i 's/{ question: "How do I get started/{ id: "getting-started", question: "How do I get started/' src/app/guides/[slug]/page.tsx
sed -i 's/{ question: "What should I look for/{ id: "casino-selection", question: "What should I look for/' src/app/guides/[slug]/page.tsx  
sed -i 's/{ question: "How can I maximize/{ id: "maximize-winnings", question: "How can I maximize/' src/app/guides/[slug]/page.tsx
sed -i 's/{ question: "What are the most common/{ id: "common-mistakes", question: "What are the most common/' src/app/guides/[slug]/page.tsx
sed -i 's/faqs={faqs}/items={faqs}/' src/app/guides/[slug]/page.tsx

echo "=== All files fixed ==="

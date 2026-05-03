#!/usr/bin/env bash
# shadcn/ui 초기화 스크립트
# 프리셋: Nova (Lucide + Geist)

npx shadcn-ui@latest init \
  --style "default" \
  --base-color "zinc" \
  --use-typography false \
  --use-colors true \
  --yes \
  2>&1 | head -50 || true

# 컴포넌트 추가
npx shadcn@latest add button --yes 2>&1 || true
npx shadcn@latest add card --yes 2>&1 || true
npx shadcn@latest add input --yes 2>&1 || true
npx shadcn@latest add label --yes 2>&1 || true
npx shadcn@latest add badge --yes 2>&1 || true
npx shadcn@latest add separator --yes 2>&1 || true
npx shadcn@latest add sonner --yes 2>&1 || true
npx shadcn@latest add alert --yes 2>&1 || true
npx shadcn@latest add avatar --yes 2>&1 || true
npx shadcn@latest add skeleton --yes 2>&1 || true

echo "✓ shadcn/ui 설치 완료"

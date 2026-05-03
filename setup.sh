#!/usr/bin/env bash
set -e

echo "=== Next.js v15 Starterkit 설치 시작 ==="
echo ""

# 1. Next.js 프로젝트 생성 (현재 디렉토리)
echo "[1/6] Next.js v15 프로젝트 생성..."
npx create-next-app@latest . \
  --yes \
  --src-dir

# 2. 추가 의존성 설치
echo "[2/6] 의존성 설치..."
npm install \
  next-themes \
  sonner \
  clsx \
  tailwind-merge \
  class-variance-authority

# 3. 개발 의존성 설치
echo "[3/6] 개발 의존성 설치..."
npm install -D \
  prettier \
  eslint-config-prettier \
  prettier-plugin-tailwindcss

# 4. shadcn/ui 초기화
echo "[4/6] shadcn/ui 초기화..."
npx shadcn@latest init --yes

# 5. shadcn/ui 컴포넌트 설치
echo "[5/6] shadcn/ui 컴포넌트 추가..."
for component in button card input label badge separator sonner alert avatar skeleton; do
  echo "y" | npx shadcn@latest add "$component" 2>&1 | grep -E "✔|Created" || true
done

# 6. 완료
echo ""
echo "[6/6] 설치 완료!"
echo ""
echo "=== 다음 단계 ==="
echo "  npm run dev  # 개발 서버 시작"
echo "  http://localhost:3000 에서 확인"

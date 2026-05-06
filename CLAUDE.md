# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 주요 명령어

```bash
npm run dev          # 개발 서버 실행 (localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npm run lint:fix     # ESLint 자동 수정
npm run format       # Prettier 포맷 적용
npm run format:check # Prettier 포맷 검사
npm run type-check   # TypeScript 타입 검사 (noEmit)
```

테스트 프레임워크는 설정되어 있지 않습니다.

## 실제 버전 (주의)

`package.json` 기준 실제 버전:
- **Next.js 16.2.4** (UI 텍스트에 "v15"라고 표기되어 있으나 실제는 16)
- **React 19.2.4**

코드 작성 전 반드시 `node_modules/next/dist/docs/`의 관련 가이드를 읽으십시오.

## 아키텍처 개요

### App Router 구조

`src/app/` 아래 App Router를 사용합니다. `src/app/layout.tsx`가 전체 레이아웃을 감싸며, `ThemeProvider` → `Header` + `main` + `Footer` 순서로 구성됩니다.

특수 파일: `error.tsx` (에러 바운더리, `"use client"` 필수), `loading.tsx` (Suspense 스켈레톤), `not-found.tsx`.

### params / searchParams는 Promise

Next.js 15+부터 `params`와 `searchParams`가 비동기입니다. `src/types/index.ts`의 `PageProps` 타입을 사용하고, 반드시 `await`해야 합니다:

```ts
export default async function Page({ params }: PageProps<{ id: string }>) {
  const { id } = await params
}
```

### Tailwind v4 CSS-first

`tailwind.config.js`가 존재하지 않습니다. 테마는 `src/app/globals.css`에서 CSS 변수와 `@theme inline` 블록으로 관리합니다. 새 테마 토큰 추가 시 해당 파일을 수정하십시오.

### shadcn/ui 컴포넌트

`components.json`에 `"rsc": true`가 설정되어 있어 Server Component 환경을 지원합니다. UI 컴포넌트는 `src/components/ui/`에 위치하며 shadcn CLI로 추가합니다:

```bash
npx shadcn@latest add <component>
```

레이아웃 컴포넌트(`Header`, `Footer`, `ThemeToggle`)는 `src/components/layout/`, 페이지 공통 컴포넌트(`PageHeader`, `Section`)는 `src/components/common/`에 위치합니다.

### 내비게이션 및 사이트 설정

새 페이지나 네비게이션 항목 추가 시 `src/lib/constants.ts`의 `NAV_ITEMS`와 `SITE_CONFIG`를 수정합니다. `Header`는 `"use client"`이며 `usePathname()`으로 활성 링크를 강조합니다.

### 경로 별칭

`@/*` → `src/*` (tsconfig.json paths 설정)

### 유틸리티

`src/lib/utils.ts`에 `cn()` (clsx + tailwind-merge), `formatCurrency()` (ko-KR 원화), `formatDate()` (ko-KR 한국어 날짜), `slugify()`, `sleep()` 제공.

## 코드 규칙

- **Prettier**: 세미콜론 없음, 큰따옴표, 줄 너비 100, `prettier-plugin-tailwindcss`로 클래스 자동 정렬
- **언어**: UI 텍스트·코드 주석·커밋 메시지는 한국어, 변수명·함수명은 영어
- **환경 변수**: `.env.example` 참조, `NEXT_PUBLIC_APP_NAME`과 `NEXT_PUBLIC_APP_URL`이 핵심

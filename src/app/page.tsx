import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import {
  Rocket,
  Palette,
  Code2,
  Zap,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader
        title="Next.js Starterkit"
        description="Next.js v15 + TailwindCSS v4 + shadcn/ui로 구축된 프로덕션 준비 스타터킷"
        badge="v0.1.0"
      />

      <Section title="포함된 기술 스택">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Separator className="my-8" />

      <Section title="버튼 컴포넌트">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button>
            <ArrowRight className="mr-2 h-4 w-4" />
            With Icon
          </Button>
        </div>
      </Section>

      <Separator className="my-8" />

      <Section title="뱃지 컴포넌트">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Separator className="my-8" />

      <Section title="폼 컴포넌트">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>계정에 로그인하여 시작하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="hello@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">로그인</Button>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}

const features = [
  {
    icon: Rocket,
    title: "Next.js v15",
    description: "App Router, Server Components, 스트리밍 SSR 지원",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description: "CSS-first 방식, 설정 파일 없이 CSS 변수로 테마 관리",
  },
  {
    icon: Code2,
    title: "shadcn/ui",
    description: "복사-붙여넣기 방식의 접근성 높은 UI 컴포넌트",
  },
  {
    icon: Zap,
    title: "TypeScript",
    description: "strict mode 활성화, 완전한 타입 안전성 보장",
  },
]

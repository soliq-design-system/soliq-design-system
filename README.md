# Soliq Design System

Monorepo paketlar:
- `@soliq/design-tokens` - rang, motion va boshqa tokenlar
- `@soliq/ui` - qayta ishlatiladigan UI komponentlar
- `@soliq-design-system/experience` - productga yaqin tayyor holatdagi komponentlar
- `@soliq/playground` - komponentlarni ishlab ko'rish uchun dev app

## Ishga tushirish

```bash
pnpm install
pnpm dev
```

`pnpm dev` `apps/playground`ni ishga tushiradi.

## Komponent qo'shish tartibi

1. `packages/ui/src/components/<ComponentName>/` papkasini oching.
2. `<ComponentName>.tsx` va `index.ts` yarating.
3. `packages/ui/src/index.ts` ga export qo'shing.
4. `apps/playground/src/App.tsx` ga import qilib, vizual tekshiring.

Shu pattern bilan komponentlar soni oshsa ham struktura tartibli qoladi.

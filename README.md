# my-portfolio

このテンプレートは、ViteでVue 3の開発を始めるのに役立ちます。

## 推奨IDEセットアップ

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（Veturは無効化してください）。

## `.vue` インポートの型サポート（TypeScript）

TypeScriptはデフォルトで`.vue`インポートの型情報を扱えないため、型チェックには`tsc` CLIの代わりに`vue-tsc`を使用します。エディタでは[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)が必要です。

## 設定のカスタマイズ

[Vite公式ドキュメント](https://vite.dev/config/) を参照してください。

## プロジェクトセットアップ

```sh
npm install
```

### 開発用サーバーの起動（ホットリロード対応）

```sh
npm run dev
```

### 本番用ビルド（型チェック・コンパイル・最小化）

```sh
npm run build
```

### [ESLint](https://eslint.org/)によるリント

```sh
npm run lint
```

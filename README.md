# Description

Solitude is an arty mil calculator for [Hell Let Loose](https://store.steampowered.com/app/686810/Hell_Let_Loose/) built by tauri

## Screenshot

![](https://github-page-img.oss-cn-hongkong.aliyuncs.com/img/solitude.png)

# Binary

Download binary release

[v0.1.0](https://github.com/NaT5uK1/solitude/releases/tag/v0.1.0)

# Build

## Prepare

### Install Tauri

Tauri official docs includes:

+ [Linux](https://tauri.studio/docs/getting-started/setting-up-linux)
+ [Macos](https://tauri.studio/docs/getting-started/setting-up-macos)
+ [Windows](https://tauri.studio/docs/getting-started/setting-up-windows)

Besides,PNPM is recommended:

```shell
#linux
curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

#macos
brew install pnpm

#windows
scoop install nodejs-lts pnpm
```

If you have any question during installing to see [PNPM](https://pnpm.io/installation)

## Build on your platform

```shell
git clone git@github.com:NaT5uK1/solitude.git
cd solitude
pnpm install
pnpm tauri build
```

# Run as a webapp

## Online

There's a [solitude server](https://solitude-khaki.vercel.app/)

## Development

```shell
git clone git@github.com:NaT5uK1/solitude.git
cd solitude
pnpm install
pnpm dev
```

## Production

```shell
git clone git@github.com:NaT5uK1/solitude.git
cd solitude
pnpm install
pnpm build
```

You can find bundle in `dist`,then deploy it on any server you like
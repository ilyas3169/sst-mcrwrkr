---
title: create-sst
description: "Docs for the create-sst package"
---
import MultiPackagerCode from "@site/src/components/MultiPackagerCode";
import TabItem from "@theme/TabItem";

A simple CLI [`create-sst`](https://www.npmjs.com/package/create-sst) that sets up a modern web application powered by SST

## Usage

There's no need to install this CLI. Just use it directly to create your projects.

<MultiPackagerCode>
<TabItem value="npx">

```bash
npx create-sst@latest
```

</TabItem>

<TabItem value="npm">

```bash
npm init sst
```

</TabItem>

<TabItem value="yarn">

```bash
yarn create sst
```

</TabItem>
</MultiPackagerCode>

This will prompt you for the database option and a folder name. And it will bootstrap the application in that directory.

## Options

Pass in the following (optional) options.

### `--template`

Instead of the standard starter, you can choose to use one of our minimal setups or examples as the template to bootstrap.

```bash
npx create-sst@latest --template=starters/javascript-starter
```

### `--minimal`

Instead of the standard starter, this will list our minimal setups if you'd like to start from scratch.

```bash
npx create-sst@latest --minimal
```

### `--examples`

Instead of the standard starter, this will list our examples if you'd like to copy one of them to try it out.

```bash
npx create-sst@latest --examples
```

## Arguments

### `<destination>`

Specify a destination directory instead of typing it into the interactive prompt

```bash
npx create-sst@latest my-sst-app
```

Note that extra `--` when using `npm init`.

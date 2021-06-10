# 開発環境構築（git 編）

## 1.github アカウント

全員からアドレスをもらい、招待する。

招待されたら登録する。招待されたメールを確認（github アカウント登録）

sshkey 公開鍵の作成し、github に設定

[https://qiita.com/wakahara3/items/52094d476774f3a]()

作成したら New SSH key で公開鍵を追加

[https://github.com/settings/keys]()

## 2.sourcetree

sourcetree の DL

sourcetreee からリポジトリをクローン

[https://www.evoworx.co.jp/blog/sourcetree-git/]()

## 3.特定リポジトリに招待

sourcetree からリポジトリをクローン。

# 開発環境構築（ローカル環境編）

##homebrew のインストール
[https://brew.sh/index_ja]()

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

##nodebrew のインストール

`brew install nodebrew`

`nodebrew`

`nodebrew install-binary stable`

[https://qiita.com/wakahara3/items/52094d476774f3a]()

`export PATH=$HOME/.nodebrew/current/bin:$PATH`

`nodebrew use v8.11.1`

`echo $PATH`

##npm のインストール

##yarn のインストール
[https://qiita.com/suisui654/items/1b89446e03991c7c2c3d]()

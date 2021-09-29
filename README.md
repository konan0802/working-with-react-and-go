# Working with React and Go (golang)
「[Working with React and Go (golang)](https://www.udemy.com/course/working-with-react-and-go-golang/)」の学習を行った際のリポジトリ

## 構成
* go-movies: 映画アプリのフロントエンド(React)
* test-app: Reactを触ってみた用のディレクトリ
* backend-app: 映画アプリのバックエンド(Golang)
* postgreSQL: 映画アプリのDB（postgreSQLの`.sqlファイル`）

## 開発環境の立ち上げ
### ◇PostgreSQLの立ち上げ
1. PostgreSQLのインストール
    ```bash
    $ brew install postgresql
    ```
    ```bash
    $ psql --version
    ```
2. PostgreSQLの立ち上げ
    ```bash
    $ brew services start postgresql
    ```
3. DBの作成
    ```bash
    $ createdb go_movies
    ```
4. ダウンロードした`.sqlファイル`を作成したDBにdump
    ```bash
    $ ls
    go_movies.sql
    ```
    ```bash
    $ psql -d go_movies -f go_movies.sql
    ```
参考：[macローカル環境にPostgreSQL13.0をインストールしデータベース環境を設定する](https://tomato-develop.com/mac-local-postgresql-database/)
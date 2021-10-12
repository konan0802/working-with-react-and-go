# Working with React and Go (golang)
「[Working with React and Go (golang)](https://www.udemy.com/course/working-with-react-and-go-golang/)」の学習を行った際のリポジトリ

## 構成
* `backend-app`: 映画アプリのバックエンド(Golang)
* `go-movies`: 映画アプリのフロントエンド(React)
* `postgreSQL`: 映画アプリのDB（postgreSQLの`.sqlファイル`）
* `test-app`: Reactを触ってみたディレクトリ

## ローカル環境の立ち上げ
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

### ◇フロント(React)の立ち上げ
1. `go-movies`に移動
2. 起動
    ```bash
    $ npm start
    ```
3. 「[http://localhost:3000/](http://localhost:3000/)」にアクセス

### ◇バックエンド(Golang)の立ち上げ
1. `backend-app`に移動
2. 起動
    ```bash
    $ go run ./cmd/api/
    ```
3. 「[http://localhost:4000/](http://localhost:4000/)」にアクセス

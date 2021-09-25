# Working with React and Go (golang)
「[Working with React and Go (golang)](https://www.udemy.com/course/working-with-react-and-go-golang/)」の学習を行った際のリポジトリ

## 構成
* go-movies: 映画アプリのフロントエンド(React)
* test-app: Reactのテスト用アプリ
* backend-app: Goのテスト用アプリ
* postgreSQL: postgreSQLの.sqlファイル

### 開発環境の立ち上げ
#### ◇PostgreSQLの立ち上げ
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
    $ createdb your_database
    ```
4. ダウンロードした`.sqlファイル`をdump
    ```bash
    $ psql -d go_movies -f go_movies.sql
    ```
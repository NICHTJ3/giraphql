# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 2.2.5 - 2021-05-18

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.2.4 - 2021-05-13

#### 📘 Docs

- add docs for loadableNode ([1ae01e8](https://github.com/hayes/giraphql/commit/1ae01e8))

#### 🛠 Internals

- add tests for loadableNode ([c1b49a0](https://github.com/hayes/giraphql/commit/c1b49a0))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.2.3 - 2021-05-12

#### 🛠 Internals

- udate dev deps ([3251227](https://github.com/hayes/giraphql/commit/3251227))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.2.2 - 2021-05-10

#### 🐞 Fixes

- update ci build command ([7e1d1d2](https://github.com/hayes/giraphql/commit/7e1d1d2))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.2.1 - 2021-05-10

#### 🐞 Fixes

- force new version to fix esm build issue ([25f1fd2](https://github.com/hayes/giraphql/commit/25f1fd2))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





## 2.2.0 - 2021-05-10

#### 🚀 Updates

- add esm build for all packages ([d8bbdc9](https://github.com/hayes/giraphql/commit/d8bbdc9))

#### 📘 Docs

- update readmes ([07c727b](https://github.com/hayes/giraphql/commit/07c727b))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.1.0 - 2021-05-05

**Note:** Version bump only for package @giraphql/plugin-scope-auth





## 2.1.0-alpha.0 - 2021-05-05

#### 🚀 Updates

- add script for generating deno compatible files ([6dc68c1](https://github.com/hayes/giraphql/commit/6dc68c1))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.0.4 - 2021-05-02

#### 🛠 Internals

- force version bumps and update validation to 2.0 range ([07730b3](https://github.com/hayes/giraphql/commit/07730b3))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.0.3 - 2021-05-02

#### 🛠 Internals

- migrate to @beemo/dev for dev tool configs ([1da1283](https://github.com/hayes/giraphql/commit/1da1283))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.0.2 - 2021-04-16

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.0.2-alpha.0 - 2021-04-12

#### 📦 Dependencies

- update dev dependencies ([25a15d4](https://github.com/hayes/giraphql/commit/25a15d4))
- update dev deps ([cbfa0a4](https://github.com/hayes/giraphql/commit/cbfa0a4))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





### 2.0.1 - 2021-02-19

**Note:** Version bump only for package @giraphql/plugin-scope-auth





# 2.0.0 - 2021-02-16

#### 💥 Breaking

- update plugin API to avoid modifying args. subGraphs are now build by passing subGraph to toSchema ([66d456e](https://github.com/hayes/giraphql/commit/66d456e))
- update plugin exports and names to be more consistent ([ee07b35](https://github.com/hayes/giraphql/commit/ee07b35))

#### 📦 Dependencies

- update dependencies and add license files ([cb0d102](https://github.com/hayes/giraphql/commit/cb0d102))

#### 📘 Docs

- add more docs o writing plugins ([b996fc6](https://github.com/hayes/giraphql/commit/b996fc6))
- wip - plugin guide ([cf9c6ec](https://github.com/hayes/giraphql/commit/cf9c6ec))

**Note:** Version bump only for package @giraphql/plugin-scope-auth





# 2.0.0-alpha.0 - 2021-02-10

#### 💥 Breaking

- you can no-longer define args on 'exposed' fields ([240162b](https://github.com/hayes/giraphql/commit/240162b))

#### 🚀 Updates

- add option to disable scope auth during build ([c4f6bee](https://github.com/hayes/giraphql/commit/c4f6bee))
- add support for  scopes ([0b10ffd](https://github.com/hayes/giraphql/commit/0b10ffd))
- add support for authScope checks on interfaces ([fa6fe1e](https://github.com/hayes/giraphql/commit/fa6fe1e))
- add support for skipping type/interface scopes on specific fields ([34c95e3](https://github.com/hayes/giraphql/commit/34c95e3))

#### 🐞 Fixes

- bump auth plugin to 2.0 ([2bbb142](https://github.com/hayes/giraphql/commit/2bbb142))

#### 📘 Docs

- add initial docs for scope auth plugin ([15b086d](https://github.com/hayes/giraphql/commit/15b086d))

#### 🛠 Internals

- add some basic scope-auth tests ([7ceb24a](https://github.com/hayes/giraphql/commit/7ceb24a))
- add some caching tests ([0a08760](https://github.com/hayes/giraphql/commit/0a08760))
- add tests for authScope functions on fields ([324eb2f](https://github.com/hayes/giraphql/commit/324eb2f))
- add tests for authScope functions on types ([aed363a](https://github.com/hayes/giraphql/commit/aed363a))
- add tests for type authScopes ([951a6cd](https://github.com/hayes/giraphql/commit/951a6cd))

**Note:** Version bump only for package @giraphql/plugin-scope-auth

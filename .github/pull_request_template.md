# Описание изменений

- Firestore rules: ужесточение доступа, запрет клиентских create для invites/messages, новые правила для tasks
- Cloud Functions: callable createTask, оптимизации select(), статус сообщений, расписания (recurring tasks, weekly reports)
- Tests: негативные кейсы для invites/chat, полный suite по tasks (create/read/update/delete)
- CI: GitHub Actions (lint, React tests, rules tests на эмуляторе, build)
- Dependabot/Renovate: автообновления зависимостей
- Frontend: taskService использует callable; pushService — isSupported() + setDoc

## Мотивация и контекст
Критическое усиление безопасности и детерминированности правил, перенос сложной валидации на сервер, подготовка к масштабированию и автоматизации обновлений.

## Как проверить
- npm ci
- npm run lint
- npm test (или test:ci)
- (опционально) npm run build:win на Windows
- Тесты правил Firestore запускать под эмуляторами

## Риски
- Эмуляторы могут требовать больше памяти/Java. На Windows используйте build:win.

## Чеклист
- [ ] Код соответствует правилам линтера
- [ ] Тесты проходят локально
- [ ] Обновлена документация (README/CHANGELOG)
- [ ] Безопасность: нет расширения клиентских прав сверх необходимого

## Скриншоты / демо (опционально)
(вставьте при необходимости)

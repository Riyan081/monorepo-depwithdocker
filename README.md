 - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - bunx prisma migrate dev --name init
 - bunx prisma generate
 - bun run apps/ws-server/src/index.ts

 
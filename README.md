# Test assignment

## Setup

1. **Install dependencies**
	```bash
	npm install
	```

2. **Setup PostgreSQL database**
	```bash
	# Create database
	createdb invite_bonus_api
	```

3. **Configure environment**
	```bash
	# Create .env file
	DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/invite_bonus_api?schema=public"
	PORT=3000
	```

4. **Run migrations**
	```bash
	npx prisma generate
	npx prisma migrate dev
	```

5. **Run seed script**
	```bash
	npx prisma db seed
	```

6. **Start server**
	```bash
	npm run dev
	```

Seed script will create users, product and a purchase that will trigger bonus after 1h.
This can be tracked with: 
	```bash
	npx prisma studio
	```

## Assumptions

- 10% bonus rate
- 1-hour delay before bonus payment
- No authentication required
- Simple bonus payment (just marks as paid)
- Cron job runs every minute to check bonuses

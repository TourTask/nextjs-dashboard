import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className={styles.shape} style={{ backgroundColor: 'blue' }}>
			</div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
				<AcmeLogo />
					<div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
					<h1 className="text-blue-500">Title</h1>
					<p className={`${lusitana.className}`}>
						<strong>Welcome to Acme.</strong> This is the example for the{' '}
						<a href="https://nextjs.org/learn/" className="text-blue-500">
						Next.js Learn Course
						</a>
						, brought to you by Vercel.
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
					>
						<span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
					</Link>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					{/* Add Hero Images Here */}
					<Image
						src="/hero-desktop.png"
						alt="Hero image"
						className="hidden md:block"
						width={2000}
						height={1520}
						
					/>
					<Image
						src="/hero-mobile.png"
						alt="Hero image"
						className="block md:hidden"
						width={560}
						height={620}
						
					/>
				</div>
			</div>
		</main>
	);
}

/*
# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_lQ59zcUBuZYf@ep-twilight-block-a6akylhw-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_lQ59zcUBuZYf@ep-twilight-block-a6akylhw.us-west-2.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-twilight-block-a6akylhw-pooler.us-west-2.aws.neon.tech
PGHOST_UNPOOLED=ep-twilight-block-a6akylhw.us-west-2.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_lQ59zcUBuZYf

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_lQ59zcUBuZYf@ep-twilight-block-a6akylhw-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_lQ59zcUBuZYf@ep-twilight-block-a6akylhw.us-west-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-twilight-block-a6akylhw-pooler.us-west-2.aws.neon.tech
POSTGRES_PASSWORD=npg_lQ59zcUBuZYf
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_lQ59zcUBuZYf@ep-twilight-block-a6akylhw-pooler.us-west-2.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_lQ59zcUBuZYf@ep-twilight-block-a6akylhw-pooler.us-west-2.aws.neon.tech/neondb?connect_timeout=15&sslmode=require
*/
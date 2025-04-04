import { lusitana } from '@/app/ui/fonts';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {

    return (
        <main>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Invoices', href: '/dashboard/invoices' },
              {
                label: 'Create Invoice',
                href: '/dashboard/invoices/create',
                active: true,
              },
            ]}
          />
          <Form />
        </main>
      );
}
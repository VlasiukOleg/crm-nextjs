'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Button from './button';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        show={show}
        onSubmit={console.log}
        onClose={() => setShow(false)}
      />
    </>
  );
}

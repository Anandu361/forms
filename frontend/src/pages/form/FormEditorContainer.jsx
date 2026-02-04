import React, { useState } from 'react';
import FormEditorLayout from '../../components/layout/FormEditorLayout';

const FormEditorContainer = () => {
  // This state is lifted up so it can be shared across tabs if needed, 
  // or at least so the Header input stays in sync.
  const [title, setTitle] = useState('Untitled Form');

  return <FormEditorLayout title={title} setTitle={setTitle} />;
};

export default FormEditorContainer;

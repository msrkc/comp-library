import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field } from './Field';
import { matchers } from '@emotion/jest';
expect.extend(matchers);

jest.mock('../utils/useId');

describe('Field', () => {
  describe('Label', () => {
    it('applies ID to htmlFor attribute', () => {
      render(
        <Field>
          <Field.Label>Label</Field.Label>
        </Field>
      );

      expect(screen.getByText('Label')).toHaveAttribute('for', 'uniq-id');
    });
  });

  describe('Input', () => {
    it('applies ID to id attribute', () => {
      render(
        <Field>
          <Field.Label>Input</Field.Label>
          <Field.Input />
        </Field>
      );

      expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'uniq-id');
    });
  });

  describe('TextArea', () => {
    it('applies ID to id attribute', () => {
      render(
        <Field>
          <Field.Label>Textarea</Field.Label>
          <Field.Textarea />
        </Field>
      );

      expect(screen.getByLabelText('Textarea')).toHaveAttribute(
        'id',
        'uniq-id'
      );
    });

    it('remove resize ability', () => {
      render(
        <Field>
          <Field.Label>Textarea</Field.Label>
          <Field.Textarea isResizable={false} />
        </Field>
      );

      expect(screen.getByLabelText('Textarea')).toHaveStyleRule(
        'resize',
        'none'
      );
      screen.debug();
    });
  });
});

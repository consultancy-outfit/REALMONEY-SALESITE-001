"use client";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { FormGridPropsI } from "../Grids.interface";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";

export const FormGrid = (props: FormGridPropsI) => {
  const {
    formFieldsList = [],
    spacing = 2,
    disabled,
    children,
    md = 12,
    lg = md,
    size = "small",
  } = props;

  return (
    <ContainerGridLayout spacing={spacing}>
      {formFieldsList?.map((form: any) => (
        <ItemGridLayout
          xs={12}
          md={form?.md ?? md}
          lg={form?.lg ?? form?.md ?? lg}
          key={form?._id}
          customStyles={form?.gridSx}
        >
          <form.component
            {...form?.componentProps}
            size={size}
            disabled={form?.componentProps?.disabled || disabled}
          />
        </ItemGridLayout>
      ))}
      {children}
    </ContainerGridLayout>
  );
};

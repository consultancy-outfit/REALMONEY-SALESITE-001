import UiNoPageFoundState from "@/components/ui-status-states/ui-no-page-found-state";
import { MainLayout } from "@/layouts/main-layout";

export const NotFound = () => {
  return (
    <MainLayout>
      <UiNoPageFoundState hasButton />;
    </MainLayout>
  );
};

export default NotFound;

import { Stack, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  const infoWeCollect = [
    "Personal Information: Name, email address, phone number, company name, job title.",
    "Financial Data: Bank account information, transaction history (if applicable to our services).",
    "Technical Information: IP address, browser type, device details, and cookies.",
    "Usage Data: Pages visited, actions taken, and preferences on our site.",
  ];
  const howWeUseYourInfo = [
    "Provide and manage our products and services.",
    "Communicate with you regarding updates or support.",
    "Improve our website functionality and user experience",
    "Ensure legal and regulatory compliance.",
    "Market relevant offers or updates (only with your consent).",
  ];
  const dataProtection = [
    "Trusted third-party service providers (e.g., hosting, analytics, CRM).",
    "Regulators or legal authorities if required by law.",
    "Affiliates or subsidiaries under Real Money for internal operations.",
  ];
  const yourRights = [
    "Access or correct your personal data.",
    "Request deletion of your data.",
    "Withdraw consent for marketing.",
    "File a complaint with a data protection authority.",
  ];
  return (
    <Stack sx={{ color: "#03020C" }} alignItems="center" px={{ lg: 0, xs: 3 }}>
      <Stack sx={{ width: { lg: "70%", xs: "100%" } }} spacing={4}>
        <Typography
          color="#fff"
          fontFamily="Red Hat Display"
          fontWeight={700}
          fontSize={{ md: "4.25rem", xs: "2.5rem" }}
          textAlign="center"
        >
          Privacy Policy
        </Typography>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"2rem"}
            textAlign="left"
          >
            Introduction
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            At Real Money, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, store, and protect your personal
            information when you visit our website or use our services.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Information We Collect
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            We may collect the following types of information:
          </Typography>
          {infoWeCollect?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#fff"
              fontFamily="Red Hat Display"
              fontSize={"1rem"}
              textAlign="left"
              sx={{ opacity: "70%" }}
              component={"li"}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            How We Use Your Information
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            We use your information to:
          </Typography>
          {howWeUseYourInfo?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#fff"
              fontFamily="Red Hat Display"
              fontSize={"1rem"}
              textAlign="left"
              sx={{ opacity: "70%" }}
              component={"li"}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Data Protection & Security{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            We do not sell your personal data. However, we may share it
            with:{" "}
          </Typography>
          {dataProtection?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#fff"
              fontFamily="Red Hat Display"
              fontSize={"1rem"}
              textAlign="left"
              sx={{ opacity: "70%" }}
              component={"li"}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Your Rights
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            Depending on your location, you may have the right to:
          </Typography>
          {yourRights?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#fff"
              fontFamily="Red Hat Display"
              fontSize={"1rem"}
              textAlign="left"
              sx={{ opacity: "70%" }}
              component={"li"}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Third-Party Services{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            Our site may include links to third-party sites. We are not
            responsible for their privacy practices and encourage you to review
            their policies.{" "}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Data Retention{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            We retain your data only as long as necessary to fulfil the purposes
            stated or as required by law.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Policy Updates{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            We may update this Privacy Policy periodically. You’ll be notified
            of significant changes via email or a prominent site notice.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Contact Us{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            If you have any questions or concerns regarding your privacy, please
            contact us at info@realmoney.co.uk
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

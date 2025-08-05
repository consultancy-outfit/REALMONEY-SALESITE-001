import { Stack, Typography } from "@mui/material";

export default function TermsAndConditionsPolicy() {
  const accountRegistration = [
    "Providing accurate, current information.",
    "Maintaining the confidentiality of your account credentials.",
    "Notifying us immediately of any unauthorised use.",
  ];
  const useOfServices = [
    "Violate any intellectual property or proprietary rights.",
    "Distribute harmful or malicious software.",
    "Attempt to gain unauthorised access to our systems.",
  ];
  const disclaimers = [
    "Continuous or secure access to our services.",
    "That the information is accurate, complete, or up to date.",
    "That our services will be free from viruses or other harmful components.",
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
          Terms & Conditions
        </Typography>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"2rem"}
            textAlign="left"
          >
            Welcome to Real Money
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            {` Welcome to Real Money. These Terms and Conditions ("Terms") govern your access to and use of our website, services, and digital platforms operated by Real Money ("we," "us," or "our"). By using our services, you agree to be bound by these Terms.`}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Acceptance of Terms
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            By accessing or using our website or services, you confirm that you
            have read, understood, and agree to these Terms. If you do not
            agree, you must not use our services.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Account Registration
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            To access certain features, you may be required to create an
            account. You are responsible for:{" "}
          </Typography>
          {accountRegistration?.map((items) => (
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
            Use of Services{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            You agree to use our services only for lawful purposes and in
            compliance with all applicable laws. You must not:
          </Typography>
          {useOfServices?.map((items) => (
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
            Intellectual Property{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            All content on our site and services—including text, graphics,
            logos, software, and trademarks—is the property of Real Money or its
            licensors and is protected by intellectual property laws. You may
            not copy, distribute, or use it without prior written permission.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Privacy
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            Your use of our services is also governed by our Privacy Policy,
            which explains how we collect and use your information.
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Disclaimers{" "}
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            Our services are provided “as is” and “as available” without
            warranties of any kind. We do not guarantee:
          </Typography>
          {disclaimers?.map((items) => (
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
            Limitation of Liability
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            To the maximum extent permitted by law, Real Money shall not be
            liable for any indirect, incidental, special, or consequential
            damages, or loss of data, arising from your use of our services.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Modifications
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page and become effective immediately. Continued
            use after changes indicates your acceptance.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1.3rem"}
            textAlign="left"
          >
            Governing Law
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize={"1rem"}
            textAlign="left"
            sx={{ opacity: "70%" }}
          >
            These Terms are governed by the laws of United Kingdom, without
            regard to its conflict of law principles. Any disputes will be
            handled in the courts of UK.
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
            If you have any questions or concerns about these Terms of Service,
            please reach out to us at info@realmoney.co.uk
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

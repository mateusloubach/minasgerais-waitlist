import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for Joining the Waitlist, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://nextjs-notion-waitlist.vercel.app/waitlist-logo.png`}
          width="220"
          height="100"
          alt="Notion Waitlist Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Obrigado por entrar na lista de espera da plataforma minasGerais! 
          Eu sou Mateus, o Desenvolvedor por trás deste projeto. Estou 
          feliz que esteja conosco nessa jornada.
        </Text>
        <Text style={paragraph}>
          Vou mantê-lo informado sobre o progresso e notificá-lo assim que for
          pronto para o público. Enquanto isso, se você tiver alguma dúvida ou
          feedback, não hesite em entrar em contato respondendo diretamente {" "}
          <a href="mailto:mcesarloubach@gmail.com" style={link}>
            neste email {""}
          </a>
          — Estou aqui para ajudar!
        </Text>
        <Text style={paragraph}>
          Você também pode me seguir e saber mais sobre meus outros projetos em:{" "}
          <a href="https://github.com/mateusloubach" style={link}>
            @mateusloubach
          </a>
        </Text>
        <Text style={signOff}>
          Até mais sô,
          <br />
          Mateus Loubach
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Você recebeu este e-mail porque se inscreveu na lista de espera em minasGerais.
          Se você acredita que isso é um erro, pode ignorar este e-mail.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "João",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  // background: "linear-gradient(-225deg, #ffffff 0%, #FFA99F 48%, #FF719A 100%)",
  background: "#FFFFFF",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};

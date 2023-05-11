import "next";

declare module "next" {
  interface NextApiRequest {
    socket: {
      encrypted?: boolean;
    };
  }
}

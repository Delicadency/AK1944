import Stripe from "stripe";
import { initializeStripe } from "../stripe";

// Mock Stripe constructor
// We return an empty object since we're only testing initialization
// and not any specific Stripe functionality
jest.mock("stripe", () => {
  const mockStripe = jest.fn().mockImplementation(() => ({
    _config: {},
    _api: {
      validateKey: () => true,
    },
  }));
  return mockStripe;
});

describe("initializeStripe", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.each([undefined, "", "   "])(
    "throws an error when secret key is missing",
    (secretKey) => {
      expect(() => initializeStripe(secretKey)).toThrow(
        "Stripe secret key is not set",
      );
    },
  );

  it("initializes Stripe with correct configuration", () => {
    const mockSecretKey = "mock_secret_key";
    initializeStripe(mockSecretKey);

    expect(Stripe).toHaveBeenCalledTimes(1);
    expect(Stripe).toHaveBeenCalledWith(mockSecretKey, {
      apiVersion: "2025-02-24.acacia",
      typescript: true,
      appInfo: {
        name: "AK1944",
        version: "0.1.0",
      },
    });
  });
});

import React, { useState, useEffect } from "react";
import { Form, Label } from "semantic-ui-react";
import Commerce from "@chec/commerce.js";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
// Import Selections
import { stateOptions } from "../../utils/stateOptions";
import { countries } from "../../utils/Countries";
import {
  getMapObjLocalStorage,
  emptyMapObjLocalStorage,
} from "./cartFunctionality";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
const CheckoutForm = (props) => {
  // Map specifications that are passed to the extra field to be published to commercejs
  let map_specifcations_cart = getMapObjLocalStorage();
  const commerce = new Commerce(process.env.CHEC_PK);
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
    getValues,
  } = useForm();

  const router = useRouter();

  const [sameBilling, setSameBilling] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [lineItems, setLineItems] = useState();
  const [shipCountry, setShipCountry] = useState();
  const [billingShipCountry, setBillingShipCountry] = useState();

  useEffect(() => {
    /* 
            Takes Line Items from props and strutures the data 
            Object added to state   
        */

    let lineItems = {};

    props.liveObject.line_items.forEach((item) => {
      lineItems = {
        ...lineItems,
        [item.id]: {
          quantity: item.quantity,
          variants: {
            // [item.variants[0].variant_id]: item.variants[0].option_id,
          },
        },
      };
    });

    setLineItems(lineItems);
  }, []);

  useEffect(() => {
    /* *** Takes the Shipping Country and updates shipping Options *** */
    props.getShippingOptions(shipCountry);
  }, [shipCountry]);

  const getCountryInfoShipping = () => {
    /* *** Gives user proper options based on Shipping Country *** */

    // if (shipCountry === "MX") {
    //   return mexico;
    // }

    // if (shipCountry === "CA") {
    //   return canada;
    // }

    if (shipCountry === "US") {
      return stateOptions;
    }
  };

  const getCountryInfoBilling = () => {
    /* *** Gives user proper options based on Shipping Country *** */

    // if (billingShipCountry === "MX") {
    //   return mexico;
    // }

    // if (billingShipCountry === "CA") {
    //   return canada;
    // }

    if (billingShipCountry === "US") {
      return stateOptions;
    }
  };

  const handleCheckBox = (e) => {
    /* *** Toggles Checkbox on/off *** */
    setSameBilling(!sameBilling);
  };

  const onSubmit = (data) => {
    /* *** 
            Takes in all the data gathered from the Form
            Parses the data properly to match the shape for capture
        *** */

    setProcessing(true);
    let final = {};

    // Get that extr_field key from an object in commercejs
    const extra_field_id = props.liveObject.extra_fields[0].id;
    final.extra_fields = {
      [extra_field_id]: JSON.stringify(map_specifcations_cart),
    };

    final.fulfillment = {
      shipping_method: props.shipOption,
    };

    final.customer = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
    };

    final.shipping = {
      name: `${data.firstname} ${data.lastname}`,
      street: data.street,
      town_city: data.town_city,
      county_state: data.county_state,
      postal_zip_code: data.postal_zip_code,
      country: data.country,
    };

    if (!sameBilling) {
      final.billing = {
        name: data.billing_name,
        street: data.billing_street,
        town_city: data.billing_town_city,
        county_state: data.billing_county_state,
        postal_zip_code: data.billing_postal_zip_code,
        country: data.billing_country,
      };
    } else {
      // Billing and shipping addresses are the same.
      final.billing = { ...final.shipping };
    }

    if (data.gateway === "stripe") {
      // PAYMENT METHOD IS STRIPE
      // Prepare Stripe.
      const card = elements.getElement("card");

      if (!props.shipOption) {
        window.alert("Please select a shipping option");
        setProcessing(false);
        return;
      }

      stripe
        .createPaymentMethod({
          type: "card",
          card: card,
          billing_details: {
            name: `${final.billing.name}`,
          },
        })
        .catch((err) => {
          console.log("err", err);
          setProcessing(false);
          window.alert(err);
        })
        .then((result) => {
          if (result.error) {
            console.log(result.error.message);
            window.alert(result.error.message);
            setProcessing(false);
          } else {
            // No error retreiving payment method.
            final.payment = {
              gateway: data.gateway,
              stripe: {
                payment_method_id: result.paymentMethod.id,
              },
            };

            try {
              commerce.checkout
                .capture(props.tokenId, final)
                .then((res) => {
                  console.log(res, "res from CAPTURING CHECKOUT!!!");
                  props.setReceipt(res);
                  // Remove local storage carts things.... Need cart_react_id.
                  localStorage.removeItem("cart-id");
                  emptyMapObjLocalStorage();
                  router.replace(`/order-complete/${props.tokenId}/${res.id}`);
                  setProcessing(false);
                })
                .catch((err) => {
                  window.alert(err.data.error.message);
                  setProcessing(false);
                });
            } catch (e) {
              setProcessing(false);
              console.log(e, "error processing payment through commercejs");
              window.alert(e.data.error.message);
            }
          }
        })
        .catch((e) => {
          // Issue with information that the customer entered into the payment details.
          setProcessing(false);
          window.alert(e);
          return;
        });
    } else {
      // PAYMENT METHOD IS TEST GATEWAY
      final.payment = {
        gateway: data.gateway,
        card: {
          number: data.number,
          expiry_month: data.expiry_month,
          expiry_year: data.expiry_year,
          cvc: data.cvc,
          postal_zip_code: data.postal_billing_zip_code,
        },
      };

      if (props.shipOption) {
        console.log("checking out in test-gateway", final);

        commerce.checkout
          .capture(props.tokenId, final)
          .then((res) => {
            console.log(res, "res from CAPTURING CHECKOUT!!!");
            props.setReceipt(res);
            // Remove cart from cache...
            localStorage.removeItem("cart-id");
            emptyMapObjLocalStorage();
            router.replace(`/order-complete/${props.tokenId}/${res.id}`);
            setProcessing(false);
          })
          .catch((err) => {
            console.log(err);
            window.alert(err?.data?.error?.message);
            setProcessing(false);
          });
      } else {
        window.alert("Please select a shipping method!");
        setProcessing(false);
      }
    }
  };

  return (
    <Form
      className="checkout-form"
      onSubmit={handleSubmit(onSubmit)}
      loading={processing}
    >
      <h1>Customer Info</h1>
      <Form.Group widths="equal">
        <Controller
          id="customer"
          name="firstname"
          control={control}
          defaultValue={""}
          rules={{ required: "Please enter Firstname" }}
          render={({ field }) => (
            <Form.Input
              {...field}
              label="First Name"
              placeholder="John"
              fluid
              ref={null}
              error={errors?.firstname && errors?.firstname.message}
            />
          )}
        />

        <Controller
          control={control}
          name="lastname"
          defaultValue={""}
          rules={{ required: "Please enter Lastname" }}
          render={({ field }) => (
            <Form.Input
              {...field}
              label="Last name"
              placeholder="Smith"
              error={errors?.lastname && errors?.lastname.message}
              fluid
              ref={null}
            />
          )}
        />

        <Controller
          fluid
          name="email"
          control={control}
          rules={{ required: "Please enter email" }}
          defaultValue={""}
          render={({ field }) => (
            <Form.Input
              {...field}
              label="Email"
              placeholder="xyz@example.com"
              fluid
              error={errors?.email && errors?.email.message}
              ref={null}
              type="email"
            />
          )}
        />
      </Form.Group>

      <Form.Group>
        <Controller
          width={10}
          name="street"
          control={control}
          rules={{ required: "Please enter address" }}
          defaultValue={""}
          render={({ field }) => (
            <Form.Input
              {...field}
              label="Address"
              error={errors?.street && errors?.street.message}
              ref={null}
              placeholder="122 Example St"
            />
          )}
        />

        <Controller
          width={6}
          name="country"
          control={control}
          rules={{ required: "Please select country" }}
          render={({ field }) => (
            <Form.Select
              {...field}
              label="Select Country"
              placeholder="Select Country"
              options={countries || []}
              onChange={(e, { value }) => {
                setValue("country", value);
                setShipCountry(value);
                props.setShipOption(false);
                reset((formValues) => ({
                  ...formValues,
                  county_state: "",
                }));
                return value;
              }}
              ref={null}
              error={errors?.country && errors?.country.message}
            />
          )}
        />
      </Form.Group>
      <Form.Group>
        <Controller
          width={6}
          name="town_city"
          control={control}
          rules={{ required: "Please enter Town/City" }}
          defaultValue={""}
          render={({ field }) => (
            <Form.Input
              {...field}
              error={errors?.town_city && errors?.town_city.message}
              label="Town/City"
              ref={null}
              placeholder="Las Vegas"
            />
          )}
        />
        <Controller
          width={6}
          name="county_state"
          options={getCountryInfoShipping()}
          control={control}
          rules={{ required: "Must Select Country First" }}
          render={({ field }) => (
            <Form.Select
              {...field}
              label="County/State/Province/Territory"
              error={errors?.county_state && errors?.county_state.message}
              placeholder="Search ..."
              options={getCountryInfoShipping() || []}
              ref={null}
              fluid
              onChange={(e, { value }) => {
                setValue("county_state", value);
              }}
            />
          )}
        />
        <Controller
          width={4}
          name="postal_zip_code"
          label="Zip/Postal"
          placeholder="00000"
          defaultValue={""}
          control={control}
          max="99999"
          rules={{
            required: "Please enter zip",
            // max: 99999
          }}
          render={({ field }) => (
            <Form.Input
              {...field}
              label="Zip/Postal"
              placeholder="00000"
              error={errors?.postal_zip_code && errors?.postal_zip_code.message}
              ref={null}
              max="99999"
            />
          )}
        />
      </Form.Group>

      <h1>Payment Info</h1>
      <Form.Group className="payment-radio">
        <input
          name="gateway"
          type="radio"
          value="stripe"
          checked={getValues("gateway") === "stripe"}
          {...register("gateway", { required: "Please select Payment Type" })}
          onChange={(e) => {
            setValue("gateway", e.target.value);
            reset((formValues) => ({
              ...formValues,
              number: "",
              cvc: "",
              postal_billing_zip_code: "",
            }));
          }}
        />
        <label htmlFor="stripe">Credit Card</label>

        {/* <input
          name="gateway"
          type="radio"
          value="test_gateway"
          checked={getValues("gateway") === "test_gateway"}
          {...register("gateway", { required: "Please select Payment Type" })}
          onChange={(e) => {
            setValue("gateway", e.target.value);
            reset((formValues) => ({
              ...formValues,
              firstname: "Testy",
              lastname: "McTesterson",
              email: "joseph.hernandez@mapyourmemory.com",
              street: "123 Test St",
              town_city: "Testville",
              // county_state: "TX",
              postal_zip_code: "76034",
              // country: "US",
              expiry_year: "23",
              expiry_month: "01",
              number: 4242424242424242,
              cvc: 123,
              postal_billing_zip_code: 90210,
            }));
          }}
        />
        <label htmlFor="test_gateway">Test Gateway</label> */}
      </Form.Group>
      {errors?.gateway && (
        <Label className="payment-type-error" basic color="red" pointing>
          {errors?.gateway.message}
        </Label>
      )}
      <div className="ui segment">
        <CardElement />
      </div>
      <h1>Billing Address</h1>
      <Form.Checkbox
        label="Billing Address Same as Shipping ..."
        onChange={handleCheckBox}
      />
      {!sameBilling && (
        <>
          <Form.Group widths="equal">
            <Controller
              name="billing_name"
              control={control}
              rules={{ required: "Please enter Billing Name" }}
              defaultValue={""}
              render={({ field }) => (
                <Form.Input
                  width={10}
                  {...field}
                  error={errors?.billing_name && errors?.billing_name.message}
                  label="Billing Name"
                  ref={null}
                  placeholder="John Smith"
                />
              )}
            />
            <Controller
              name="billing_country"
              control={control}
              rules={{ required: "Please select country" }}
              render={({ field }) => (
                <Form.Select
                  {...field}
                  width={6}
                  error={
                    errors?.billing_country && errors?.billing_country.message
                  }
                  label="Select Country"
                  options={countries || []}
                  ref={null}
                  placeholder="Select Country"
                  onChange={(e, { value }) => {
                    setBillingShipCountry(value);
                    setValue("billing_country", value);
                    reset((formValues) => ({
                      ...formValues,
                      billing_county_state: "",
                    }));
                    return value;
                  }}
                />
              )}
            />
          </Form.Group>
          <Form.Group>
            <Controller
              name="billing_street"
              control={control}
              rules={{ required: "Please enter Street Address" }}
              defaultValue={""}
              render={({ field }) => (
                <Form.Input
                  {...field}
                  error={
                    errors?.billing_street && errors?.billing_street.message
                  }
                  width={4}
                  label="Address"
                  ref={null}
                  placeholder="122 Example St"
                />
              )}
            />
            <Controller
              name="billing_town_city"
              control={control}
              rules={{ required: "Please enter City/Town" }}
              defaultValue={""}
              render={({ field }) => (
                <Form.Input
                  {...field}
                  error={
                    errors?.billing_town_city &&
                    errors?.billing_town_city.message
                  }
                  label="City"
                  width={3}
                  ref={null}
                  placeholder="Las Vegas"
                />
              )}
            />

            <Controller
              name="billing_county_state"
              control={control}
              rules={{ required: "Must Select Country First" }}
              render={({ field }) => (
                <Form.Select
                  {...field}
                  width={6}
                  label="County/State/Province/Territory"
                  placeholder="Search State"
                  options={getCountryInfoBilling() || []}
                  ref={null}
                  fluid
                  error={
                    errors?.billing_county_state &&
                    errors?.billing_county_state.message
                  }
                  onChange={(e, { value }) => {
                    setValue("billing_county_state", value);
                  }}
                />
              )}
            />

            <Controller
              name="billing_postal_zip_code"
              control={control}
              rules={{ required: "Please enter Billing Zipcode" }}
              defaultValue={""}
              render={({ field }) => (
                <Form.Input
                  {...field}
                  error={
                    errors?.billing_postal_zip_code &&
                    errors?.billing_postal_zip_code.message
                  }
                  width={3}
                  label="Zip"
                  ref={null}
                  placeholder="00000"
                />
              )}
            />
          </Form.Group>
        </>
      )}

      <Form.Button type="submit" color="green" size="huge">
        Complete Checkout and Pay
      </Form.Button>
    </Form>
  );
};

export default CheckoutForm;

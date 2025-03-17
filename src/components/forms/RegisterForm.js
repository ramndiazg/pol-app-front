import React from "react";
import { Form, Input, Button } from "@heroui/react";

export default function LoginForm() {
  const [action, setAction] = React.useState(null);

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >

            {/*
            password,
            referredBy, */}
            <Input
        isRequired
        errorMessage="Please enter your name"
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your name"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid phone"
        label="Phone"
        labelPlacement="outside"
        name="phone"
        placeholder="Enter your phone"
        type="phone"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        errorMessage="Please enter your ID number"
        label="ID"
        labelPlacement="outside"
        name="id"
        placeholder="Enter your id number"
        type="number"
      />
      <Input
        isRequired
        errorMessage="Please enter your password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
      />

<Input
        isRequired
        errorMessage="Please repeat your password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Repeat your password"
        type="password"
      />
      <Input
        isRequired
        errorMessage="Please enter your refewrral  ID number"
        label="ID"
        labelPlacement="outside"
        name="id"
        placeholder="Enter your referral id number"
        type="number"
      />

      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}

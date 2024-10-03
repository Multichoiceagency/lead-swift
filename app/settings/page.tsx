'use client'
import React, { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SettingsContent = () => {
  const [activeSection, setActiveSection] = useState("Company details");

  const menuItems = [
    { section: 'Profile', options: ['Company details', 'Financial data', 'Company logo', 'Profile roles', 'Notifications'] },
    { section: 'Subscription & Payment', options: ['Subscription', 'Payment Method'] },
    { section: 'Invoices', options: ['General settings', 'Email settings', 'Corporate Identity and Templates'] },
    { section: 'Offers', options: ['General settings', 'Email settings', 'Corporate Identity and Templates'] },
    { section: 'API Integrations', options: ['Links'] },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Company details":
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter company name" defaultValue="Garden Lux Veranda B.V" />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input id="contactPerson" placeholder="Enter contact person" defaultValue="Robert" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="street">Street</Label>
                <Input id="street" placeholder="Enter street" defaultValue="Edisonstraat" />
              </div>
              <div>
                <Label htmlFor="houseNumber">House Number</Label>
                <Input id="houseNumber" placeholder="Enter house number" defaultValue="5c" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" placeholder="Enter postcode" defaultValue="2652 XS" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter city" defaultValue="Berkel en Rodenrijs" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="land">Land</Label>
                <Input id="land" placeholder="Enter land" defaultValue="Nederland" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" defaultValue="06-15336524" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Enter email address" defaultValue="sales@gardenluxveranda.nl" />
            </div>
            <Button type="submit" className="mt-4">Save</Button>
          </form>
        );
      case "Financial data":
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="vatNumber">VAT Number</Label>
                <Input id="vatNumber" placeholder="Enter VAT number" />
              </div>
              <div>
                <Label htmlFor="chamberOfCommerce">Chamber of Commerce Number</Label>
                <Input id="chamberOfCommerce" placeholder="Enter CoC number" />
              </div>
            </div>
            <div>
              <Label htmlFor="bankAccount">Bank Account Number (IBAN)</Label>
              <Input id="bankAccount" placeholder="Enter IBAN" />
            </div>
            <Button type="submit" className="mt-4">Save Financial Data</Button>
          </form>
        );
      case "Company logo":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="logo">Upload Company Logo</Label>
              <Input id="logo" type="file" accept="image/*" />
            </div>
            <Button type="submit" className="mt-4">Upload Logo</Button>
          </form>
        );
      case "Profile roles":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="role">Select Role</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="mt-4">Update Role</Button>
          </form>
        );
      case "Notifications":
        return (
          <form className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="emailNotifications">Email Notifications</Label>
              <Switch id="emailNotifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="smsNotifications">SMS Notifications</Label>
              <Switch id="smsNotifications" />
            </div>
            <Button type="submit" className="mt-4">Save Notification Preferences</Button>
          </form>
        );
      case "Subscription":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="subscriptionPlan">Current Subscription Plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="mt-4">Update Subscription</Button>
          </form>
        );
      case "Payment Method":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="Enter card number" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="Enter CVV" />
              </div>
            </div>
            <Button type="submit" className="mt-4">Update Payment Method</Button>
          </form>
        );
      case "General settings":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="language">Preferred Language</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="nl">Dutch</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="cet">Central European Time</SelectItem>
                  <SelectItem value="est">Eastern Standard Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="mt-4">Save General Settings</Button>
          </form>
        );
      case "Email settings":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="emailSignature">Email Signature</Label>
              <Textarea id="emailSignature" placeholder="Enter your email signature" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="autoReply">Auto-Reply</Label>
              <Switch id="autoReply" />
            </div>
            <Button type="submit" className="mt-4">Save Email Settings</Button>
          </form>
        );
      case "Corporate Identity and Templates":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="primaryColor">Primary Color</Label>
              <Input id="primaryColor" type="color" />
            </div>
            <div>
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <Input id="secondaryColor" type="color" />
            </div>
            <div>
              <Label htmlFor="font">Font</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="helvetica">Helvetica</SelectItem>
                  <SelectItem value="times">Times New Roman</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="mt-4">Save Corporate Identity</Button>
          </form>
        );
      case "Links":
        return (
          <form className="space-y-6">
            <div>
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" placeholder="Enter API Key" />
            </div>
            <div>
              <Label htmlFor="webhook">Webhook URL</Label>
              <Input id="webhook" placeholder="Enter Webhook URL" />
            </div>
            <Button type="submit" className="mt-4">Save API Settings</Button>
          </form>
        );
      default:
        return <p>Select a section to view its content.</p>;
    }
  };

  return (
    <div className="flex">
      {/* Settings Sidebar */}
      <div className="w-1/4 pr-4">
        {menuItems.map((menu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium">{menu.section}</h3>
            <ul className="mt-2">
              {menu.options.map((option, idx) => (
                <li
                  key={idx}
                  className={`p-2 cursor-pointer ${activeSection === option ? 'bg-gray-100 font-semibold' : ''}`}
                  onClick={() => setActiveSection(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Settings Content */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-6">{activeSection}</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Settings</h1>
      <SettingsContent />
    </DashboardLayout>
  );
}
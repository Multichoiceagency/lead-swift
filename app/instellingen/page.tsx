// app/instellingen/page.tsx
import React from 'react';
import Layout from '../../components/Layout';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';

const InstellingenPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Instellingen</h1>
      <Tabs defaultValue="profiel">
        <TabsList>
          <TabsTrigger value="profiel">Profiel</TabsTrigger>
          <TabsTrigger value="bedrijf">Bedrijfsgegevens</TabsTrigger>
          <TabsTrigger value="betaling">Betaling</TabsTrigger>
          <TabsTrigger value="notificaties">Notificaties</TabsTrigger>
        </TabsList>
        <TabsContent value="profiel">Profiel instellingen inhoud</TabsContent>
        <TabsContent value="bedrijf">
          Bedrijfsgegevens instellingen inhoud
        </TabsContent>
        <TabsContent value="betaling">Betaling instellingen inhoud</TabsContent>
        <TabsContent value="notificaties">
          Notificaties instellingen inhoud
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default InstellingenPage;

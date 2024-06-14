import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import "./App.css";

function App() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "", leadSource: "", typeOfUnit: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeads([...leads, form]);
    setForm({ name: "", email: "", phone: "", notes: "", leadSource: "", typeOfUnit: "" });
  };

  return (
    <div className="container glassmorphism">
      <Card className="neumorphism">
        <CardHeader>
          <CardTitle className="glow-orange">Add New Lead</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Textarea
                name="notes"
                placeholder="Notes"
                value={form.notes}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                name="leadSource"
                placeholder="Lead Source"
                value={form.leadSource}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                name="typeOfUnit"
                placeholder="Type of Unit"
                value={form.typeOfUnit}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="glow-green">Add Lead</Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Card className="neumorphism">
          <CardHeader>
            <CardTitle className="glow-orange">Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Lead Source</TableHead>
                  <TableHead>Type of Unit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead, index) => (
                  <TableRow key={index}>
                    <TableCell>{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.phone}</TableCell>
                    <TableCell>{lead.notes}</TableCell>
                    <TableCell>{lead.leadSource}</TableCell>
                    <TableCell>{lead.typeOfUnit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
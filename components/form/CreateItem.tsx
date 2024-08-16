"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTemplate } from "@/utils/hook/useTemplate";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { PlusCircle, Table } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const CreateItemForm = z.object({
  id: z.number(),
  name: z.string().min(3, {
    message: "Item name is required",
  }),
  desc: z.string(),
  category_id: z.number(),
  brand_id: z.number(),
  stock: z.number(),
  price: z.number(),
  variant_id: z.number(),
  product_type: z.string(),
});

type CreateItemFormInput = z.infer<typeof CreateItemForm>;

export default function CreateItem() {
  const { data } = useTemplate();
  console.log("Template data", data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateItemFormInput>({
    resolver: zodResolver(CreateItemForm),
    defaultValues: {
      id: 0,
      name: "",
      desc: "",
      category_id: 0,
      brand_id: 0,
      stock: 0,
      price: 0,
      variant_id: 0,
      product_type: "",
    },
  });
  const form = useRef();
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof CreateItemForm>) => {
    try {
      const response = await fetch(`/api/store-email`, {
        method: "POST",
        body: JSON.stringify({
          id: data?.id,
          name: data?.name,
          desc: data?.desc,
          category_id: data?.category_id,
          brand_id: data?.brand_id,
          stock: data?.stock,
          price: data?.price,
          variant_id: data?.variant_id,
          product_type: data?.product_type,
        }),
      });

      const result = await response.json();

      return result;
    } catch (error) {
      throw new Error("Storing Item in db Frontend Error", error as any);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full space-y-8 pt-7">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Create Item</h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Fill out the form below with the details of your item.
          </p>
        </div>
        <form ref={form as any} onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="left-column-form space-y-4">
                <div className="space-y-4">
                  <Label>Item Name</Label>
                  <Input
                    {...register("name", { required: true })}
                    placeholder="Enter your item name"
                  />
                  {errors?.name?.message && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-4">
                  <Label>Description</Label>
                  <Textarea
                    className="min-h-[100px]"
                    {...register("desc", { required: true })}
                    placeholder="Enter your item description"
                  />
                  {errors?.desc?.message && (
                    <p className="text-red-500 text-sm">
                      {errors.desc.message}
                    </p>
                  )}
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">SKU</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="w-[100px]">Size</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-001
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-1" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-1"
                              type="number"
                              defaultValue="100"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-1" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price-1"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-002
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-2" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-2"
                              type="number"
                              defaultValue="143"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-2" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price-2"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="m"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                              <ToggleGroupItem value="l">XL</ToggleGroupItem>
                              <ToggleGroupItem value="l">XXL</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-003
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-3" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-3"
                              type="number"
                              defaultValue="32"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-3" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="price-3"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      Add Variant
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="right-column-form"></div>
            </div>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Item
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

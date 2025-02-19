import { Button } from '@/components/ui/button';
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const HomePage = () => {
    return (
        <>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="flex min-h-screen w-full flex-col">
                    <main className="flex flex-1 flex-col gap-4 md:gap-6">
                        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                            <Card x-chunk="dashboard-01-chunk-0">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Revenue
                                    </CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-1">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Subscriptions
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+2350</div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-2">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+12,234</div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-3">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Now
                                    </CardTitle>
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+573</div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                                <CardHeader className="flex flex-row items-center">
                                    <div className="grid gap-2">
                                        <CardTitle>Transactions</CardTitle>
                                        <CardDescription>
                                            Recent transactions from your store.
                                        </CardDescription>
                                    </div>
                                    <Button asChild size="sm" className="ml-auto gap-1">
                                        <Link to="#">
                                            View All
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Customer</TableHead>
                                                <TableHead className="hidden xl:table-column">
                                                    Type
                                                </TableHead>
                                                <TableHead className="hidden xl:table-column">
                                                    Status
                                                </TableHead>
                                                <TableHead className="hidden xl:table-column">
                                                    Date
                                                </TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Aarav Sharma</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        aarav.sharma@email.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $250.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Vivaan Patel</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        vivaan.patel@email.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Refund
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Declined
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-24
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $150.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Kabir Verma</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        kabir.verma@email.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Subscription
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-25
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $350.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Aryan Mehta</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        aryan.mehta@email.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-26
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $450.00
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Rohan Singh</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        rohan.singh@email.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden xl:table-column">
                                                    <Badge className="text-xs" variant="outline">
                                                        Approved
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                                    2023-06-27
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $550.00
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-5">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-8">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                            <AvatarFallback>DJ</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Devansh Joshi
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                devansh.joshi@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$1,999.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/02.png" alt="Avatar" />
                                            <AvatarFallback>IG</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Ishaan Gupta
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                ishaan.gupta@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$39.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/03.png" alt="Avatar" />
                                            <AvatarFallback>RN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Reyansh Nair
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                reyansh.nair@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$299.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/04.png" alt="Avatar" />
                                            <AvatarFallback>AK</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Advait Kumar
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                advait.kumar@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$99.00</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/05.png" alt="Avatar" />
                                            <AvatarFallback>KM</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Krish Malhotra
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                krish.malhotra@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$39.00</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
            </main>
        </>
    );
};

export default HomePage;
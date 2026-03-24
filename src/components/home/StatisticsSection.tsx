import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

export function StatisticsSection() {
  const { t } = useTranslation();

  const sectorData = [
    { sector: t("bankingFinance"), percentage: 43 },
    { sector: t("ecommerceDelivery"), percentage: 28 },
    { sector: t("govSchemes"), percentage: 18 },
    { sector: t("lotteryPrizes"), percentage: 11 },
  ];

  const stats = [
    {
      value: t("fraudAmount"),
      label: t("fraudAmountDesc"),
      borderColor: "border-l-destructive",
      valueColor: "text-destructive",
      icon: TrendingUp,
      iconColor: "text-destructive",
    },
    {
      value: t("ruralVictims"),
      label: t("ruralVictimsDesc"),
      borderColor: "border-l-warning",
      valueColor: "text-warning",
      icon: TrendingUp,
      iconColor: "text-warning",
    },
    {
      value: t("dontKnowScams"),
      label: t("dontKnowScamsDesc"),
      borderColor: "border-l-primary",
      valueColor: "text-primary",
      icon: Shield,
      iconColor: "text-primary",
    },
  ];

  return (
    <section id="statistics" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("problemIsReal")}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-card rounded-2xl border border-border border-l-4 ${stat.borderColor} p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-2">
                <p className={`text-3xl md:text-4xl font-extrabold tabular-nums ${stat.valueColor}`}>
                  {stat.value}
                </p>
                <stat.icon className={`h-5 w-5 mt-1 ${stat.iconColor}`} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("changeOneMsgAtATime")}
        </p>

        {/* Horizontal Bar Chart */}
        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold">
              {t("topScamTargets")}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t("percentageAttacks")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full" role="img" aria-label="Bar chart showing percentage of smishing attacks by sector">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={sectorData}
                  margin={{ top: 10, right: 50, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} horizontal={true} vertical={false} />
                  <XAxis
                    type="number"
                    domain={[0, 50]}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="sector"
                    width={150}
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 13 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, 'Percentage']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px hsl(var(--foreground) / 0.08)',
                    }}
                    labelStyle={{ color: 'hsl(var(--popover-foreground))' }}
                    itemStyle={{ color: 'hsl(var(--muted-foreground))' }}
                    cursor={{ fill: 'hsl(var(--muted) / 0.3)' }}
                  />
                  <Bar
                    dataKey="percentage"
                    fill="hsl(var(--primary))"
                    radius={[0, 8, 8, 0]}
                    barSize={32}
                  >
                    <LabelList
                      dataKey="percentage"
                      position="right"
                      formatter={(value: number) => `${value}%`}
                      style={{ fill: 'hsl(var(--foreground))', fontWeight: 600, fontSize: 13 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

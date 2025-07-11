import { Separator } from "@/components/ui/separator";

export default function SettingsAppearancePage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Appearance</h3>
				<p className="text-sm text-muted-foreground">
					Customize the appearance of the app.
				</p>
			</div>
			<Separator />
			<div>
				{/* Appearance form will go here */}
				<p className="text-sm text-muted-foreground">
					Appearance settings content goes here.
				</p>
			</div>
		</div>
	);
}

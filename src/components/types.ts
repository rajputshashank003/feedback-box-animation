export interface FeedbackFormProps {
    onSubmit: (feedback: string) => void;
    size: 'small' | 'medium' | 'large';
}